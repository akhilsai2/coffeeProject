"use client";

import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const faqData = [
    {
        id: "0",
        question: "What makes Araku Pearl coffee unique?",
        answer:
            "We source our coffee directly from tribal farmers in the Araku Valley, ensuring fair trade, full traceability, and sustainability. Our beans are organically grown, handpicked, and specialty graded with an SCA score of 84+, guaranteeing high quality in every cup."
    },
    {
        id: "1",
        question: "Is your coffee certified organic?",
        answer:
            "Yes, all our coffee is certified organic and cultivated without the use of chemical fertilizers or pesticides. We follow strict organic farming guidelines to preserve the integrity of the land and product."
    },
    {
        id: "2",
        question: "What is the SCA score of your coffee?",
        answer:
            "Our flagship product, Araku Pearl, has a Specialty Coffee Association (SCA) score of 84+, classifying it as premium specialty-grade coffee."
    },
    {
        id: "3",
        question: "Where is your coffee grown?",
        answer:
            "Our coffee is grown in the lush, biodiverse highlands of Araku Valley, Andhra Pradesh, India, by indigenous farming communities who have cultivated the land for generations."
    },
    {
        id: "4",
        question: "What roast levels are available?",
        answer:
            "We offer medium and dark roast profiles based on customer needs. Custom roasts for wholesale partners and roasters can also be discussed."
    },
    {
        id: "5",
        question: "Can I trace the origin of the coffee I buy?",
        answer:
            "Yes! One of our core values is transparency. We provide traceability of your coffee back to its origin—right down to the farm it was grown on."
    },
    {
        id: "6",
        question: "Do you ship internationally?",
        answer:
            "Yes, we ship both green and roasted coffee globally. Our logistics partners ensure safe and timely delivery to any part of the world."
    },
    {
        id: "7",
        question: "Do you o er samples for roasters or businesses?",
        answer:
            "Absolutely. If you’re a roaster or looking to bulk-purchase, we o er sample packs of our green or roasted beans for quality testing and cupping."
    },
    {
        id: "8",
        question: "How do you ensure freshness?",
        answer:
            "All our roasted beans are packed immediately after roasting in airtight, nitrogen-flushed bags with one-way degassing valves to preserve aroma and flavor"
    },
    {
        id: "9",
        question: "How can I get in touch for wholesale or B2B inquiries?",
        answer:
            "You can fill out the contact form on our website or write directly to us at info@agroverseinnovations.com. We’re happy to customize solutions for your business"
    }
];

export default function AlwaysOpenExample() {
    return (
        <div
            className="bg-fixed bg-center bg-cover bg-no-repeat  p-3"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1652019815309-95821b00084c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZSUyMHBsYW50fGVufDB8fDB8fHww')",
            }}
        >
            <Accordion defaultActiveKey={["0"]} flush>
                <div className="w-full flex flex-wrap justify-center gap-6 p-6">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-[600px] flex flex-col"
                        >
                            <Accordion.Item
                                eventKey={item?.id?.toString()}
                                className="shadow-lg rounded-md overflow-hidden"
                            >
                                <Accordion.Header className="bg-gray-100 text-gray-800 text-[20px] font-semibold px-4 py-2">
                                    {item.question}
                                </Accordion.Header>
                                <Accordion.Body className="text-[15px] px-4 py-3 text-gray-700 bg-white accordion-paragraph">
                                    {item.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    ))}
                </div>
            </Accordion>


        </div>
    );
}
