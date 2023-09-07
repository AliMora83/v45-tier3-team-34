import React, {
  useEffect,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UseMainContext } from "../../context";
import io, { Socket } from "socket.io-client";
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { IoSendSharp } from "react-icons/io5";

const ENDPOINT = import.meta.env.VITE_GLOBAL_URL;
var socket: Socket<
  DefaultEventsMap,
  DefaultEventsMap
>;
var selectedChatCompere;
const Chat = ({ userId }: { userId: string }) => {
  const { UserState, isUserLoggedIn } =
    UseMainContext();
  const [userInfo, setUserInfo] = useState<any>();
  const [messages, setMessages] = useState<any>(
    []
  );
  const [chatRoom, setChatRoomInfo] =
    useState<any>();
  const [messageContent, setMessagesContent] =
    useState("");
  const [socketConnected, setSocketConnected] =
    useState(false);
  const socket: Socket<
    DefaultEventsMap,
    DefaultEventsMap
  > = io(ENDPOINT);

  const SendMessage = async () => {
    try {
      if (isUserLoggedIn && userId) {
        const res = await axios.post(
          `${
            import.meta.env.VITE_GLOBAL_URL
          }/chat/send-message`,
          {
            messageContent,
            senderId: UserState.userData.user._id,
            receiverId: userId,
          }
        );
        console.log(res);

        socket.emit("message", {
          messageContent,
          senderId: UserState.userData.user._id,
          receiverId: userId,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GetMessages = async () => {
    try {
      if (isUserLoggedIn && userId) {
        const res = await axios.get(
          `${
            import.meta.env.VITE_GLOBAL_URL
          }/chat/get-message?senderId=${
            UserState.userData.user._id
          }&receiverId=${userId}`
        );

        const data = res.data;
        setMessages(data.messages);
        setChatRoomInfo(data);
        console.log(res);
        socket.emit("join chat", userId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GetSingleDev = async () => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_GLOBAL_URL
        }/user/info/${userId}`
      );
      setUserInfo(res.data);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetSingleDev();
  }, [userId]);
  useEffect(() => {
    GetMessages();
    selectedChatCompere = messages;
  }, [userId]);
  useEffect(() => {
    // Initialize and connect to the Socket.IO server
    if (isUserLoggedIn) {
      socket.on("connection", () => {
        console.log("Connected to socket.io");
        console.log(
          "User ID:",
          UserState.userData.user._id
        );
        setSocketConnected(true);
      });

      // Debugging: Add a listener for 'disconnect' event
    }
  }, [isUserLoggedIn, socket]);
  useEffect(() => {
    socket.on("new message", (data: any) => {
      console.log(data);
      setMessages((prevMessages: any) => [
        ...prevMessages,
        data,
      ]);
    });
  }, []);

  if (
    userInfo &&
    userInfo.user &&
    userInfo.user.userName
  ) {
    return (
      <div
        className="flex rounded-[10px] items-center bg-[#E3F5E7] my-10 mx-auto"
        onClick={() => console.log(chatRoom)}
        style={{
          height: "600px",
          width: "500px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Chat top */}
        <div className="flex items-center justify-start px-5 rounded-t-[10px]  gap-5 bg-[#E3F5E7] w-[100%] py-5">
          <img
            className="w-[50px] h-[50px] rounded-[50%]"
            src={userInfo.user.avatar}
          />{" "}
          <div>
            <h1 className="text-[1rem] font-semibold text-light-primary dark:text-dark-primary">
              {userInfo.user.userName}
            </h1>
            <p className="text-xs text-light-green dark:text-dark-green">
              4 hours ago
            </p>
          </div>
        </div>
        {/* Chat body */}
        <div className="h-[390px] py-10 w-[100%] bg-white flex flex-col items-center gap-2 overflow-y-scroll">
          {messages &&
            messages.length > 0 &&
            messages.map((val: any) => {
              const { sender, content } = val;

              // Determine if the message is sent by the user or received from others
              const isUserMessage =
                sender ===
                UserState.userData.user._id;

              // Apply different styles based on the sender
              const messageClasses = `px-10 max-h-[500px] max-w-[250px] rounded-[50px] break-all py-2 ${
                isUserMessage
                  ? "bg-green-400 text-white self-start"
                  : "bg-gray-200 text-right self-end"
              }`;

              return (
                <div
                  className={messageClasses}
                  key={val._id}
                >
                  <h1>{content}</h1>
                </div>
              );
            })}
        </div>

        <div className="w-[90%] py-2 px-6 flex my-auto justify-around bg-white rounded-lg">
          <input
            className="outline-0 bg-transparent  w-[90%]"
            onChange={(e) =>
              setMessagesContent(e.target.value)
            }
            placeholder="start typing here ..."
          />
          <button
            className="bg-light-green hover:bg-light-primary h-[100%] w-[3rem] flex items-center justify-center rounded-lg p-2"
            onClick={SendMessage}
          >
            <IoSendSharp size={22} color="#fff" />
          </button>
        </div>
      </div>
    );
  } else {
    return <div>NO Messages yet... </div>;
  }
};

export default Chat;
