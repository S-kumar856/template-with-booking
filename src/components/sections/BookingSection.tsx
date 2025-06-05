import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Cal, { getCalApi } from "@calcom/embed-react";

const BookingSection = () => {
    useEffect(() => {
        (async function () {
          const cal = await getCalApi({"namespace":"booking"});
          cal("ui", {"theme":"light","cssVarsPerTheme":{"light":{"cal-brand":"#3a1919"},"dark":{"cal-brand":"#ffffff"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-extrabold mb-4 text-black tracking-tight">
                            Book a Meeting
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
                            Choose a time that works for you. We look forward to connecting!
                        </p>
                    </div>
                    <Cal
                        namespace="booking"
                        calLink="livan121/booking"
                        style={{ width: "100%", height: "500px", borderRadius: "0.75rem", backgroundColor: "#fff" }}
                        config={{ layout: "month_view" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default BookingSection; 