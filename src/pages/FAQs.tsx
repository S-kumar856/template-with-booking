
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FAQs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the new FAQ page
    navigate("/faq", { replace: true });
  }, [navigate]);

  return null;
};

export default FAQs;
