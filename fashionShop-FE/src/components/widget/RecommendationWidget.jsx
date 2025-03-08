import { useState, useEffect } from "react";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai"; // ✅ Import SDK Gemini
import styled from "styled-components";

const WidgetContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(10px)")};
  opacity: ${({ open }) => (open ? "1" : "0.5")};
`;

const WidgetHeader = styled.div`
  background: #ff6b6b;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const ChatContainer = styled.div`
  padding: 10px;
  max-height: 250px;
  overflow-y: auto;
`;

const InputBox = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
`;

const WidgetButton = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
`;

const RecommendationWidget = () => {
  const [open, setOpen] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const genAI = new GoogleGenerativeAI(
    "AIzaSyA1q4fs4J78zL62FdxSrQE3h-JbRRG2b68"
  );

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:8080/api/v1/products/getAllProducts"
        );
        setAllProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  const handleUserMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...chatMessages, { role: "user", text: userInput }];
    setChatMessages(newMessages);

    try {
      setLoading(true);

      // ✅ Truyền dữ liệu sản phẩm vào model Gemini
      const productData = allProducts
        .map(
          (product) =>
            `Tên: ${product.name}, Giá: ${product.price}, Loại: ${product.category}`
        )
        .join("\n");

      const model = genAI.getGenerativeModel({
        model: "models/gemini-1.5-pro-002",
      });

      const result = await model.generateContent(
        `Bạn là trợ lý AI giúp khách hàng tìm kiếm sản phẩm trong cửa hàng. Giúp tôi trả lời câu hỏi của khách hàng với cách trình bày gọn gàng, dễ hiểu. Đề xuất thông tin với các câu hỏi về câng nặng, chiều cao của khách hàng. Nếu bạn có phản hồi không liên quan đến sản phẩm, hãy trả lời là "Xin lỗi! Câu hỏi không liên quan đến sản phẩm". Nếu tìm thấy sản phẩm, hãy trả về theo đúng định dạng sau:
        Tên sản phẩm: <tên sản phẩm>
        Giá: <giá sản phẩm>
        Đây là danh sách sản phẩm hiện có:\n${productData}\n
        Dựa trên dữ liệu trên, hãy trả lời câu hỏi của khách hàng:\n"${userInput}"`
      );

      const botResponse = result.response.text();
      setChatMessages([...newMessages, { role: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Lỗi AI:", error);
    } finally {
      setLoading(false);
      setUserInput("");
    }
  };

  return (
    <WidgetContainer open={open}>
      <WidgetHeader onClick={() => setOpen(!open)}>
        <span>🛒 Chat AI Gợi Ý Sản Phẩm</span>
        <span>{open ? "▼" : "▲"}</span>
      </WidgetHeader>
      {open && (
        <ChatContainer>
          {chatMessages.map((msg, index) => (
            <p
              key={index}
              style={{ color: msg.role === "user" ? "blue" : "black" }}
            >
              {msg.role === "user" ? "Bạn: " : "AI: "}
              {msg.text}
            </p>
          ))}
          {loading && <p>Đang tìm sản phẩm...</p>}
          <InputBox
            type="text"
            placeholder="Hỏi về sản phẩm..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleUserMessage()}
          />
          <WidgetButton onClick={handleUserMessage}>Gửi</WidgetButton>
        </ChatContainer>
      )}
    </WidgetContainer>
  );
};

export default RecommendationWidget;
