import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({
  icon,
  title,
  description = "Service description goes here",
}: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-2 border-transparent hover:border-blue-800 transition-all duration-300 bg-white shadow-md">
        <CardContent className="p-6 flex flex-col items-center text-center h-full">
          <div className="mb-4 text-blue-800 p-3 bg-blue-50 rounded-full">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
