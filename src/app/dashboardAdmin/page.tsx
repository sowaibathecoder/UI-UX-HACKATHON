"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

interface DataType {
  name: string;
  value: number;
}

const data: DataType[] = [
  { name: "Sport Car", value: 17439 },
  { name: "SUV", value: 9478 },
  { name: "Coupe", value: 18197 },
  { name: "Hatchback", value: 12510 },
  { name: "MPV", value: 14406 },
];

const COLORS = ["#2F80ED", "#56CCF2", "#BB6BD9", "#27AE60", "#F2994A"];

export default function DashboardAdmin() {
  const transactions = [
    { car: "Nissan GT-R", price: "$80.00" },
    { car: "Koenigsegg", price: "$99.00" },
    { car: "Rolls Royce", price: "$96.00" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5 bg-white p-4 rounded-lg shadow mb-4 md:mb-0 md:mr-4">
        <h2 className="text-lg font-semibold mb-4">Main Menu</h2>
        <ul className="space-y-2">
          <li className="bg-blue-500 text-white p-2 rounded">Dashboard</li>
          <li className="p-2 rounded hover:bg-gray-200 transition duration-200">
            <Link href="#">Car Rent</Link>
          </li>
          <li className="p-2 rounded hover:bg-gray-200 transition duration-200">
            <Link href="#">Insight</Link>
          </li>
          <li className="p-2 rounded hover:bg-gray-200 transition duration-200">
            <Link href="#">Reimburse</Link>
          </li>
        </ul>
        <div className="mt-6 flex items-center space-x-2">
          <Image
            src="/logout.png"
            alt="Logout"
            width={24}
            height={24}
            aria-label="Logout button"
          />
          <p className="text-[#90A3BF] font-medium text-sm">Log Out</p>
        </div>
      </aside>
      {/* Main Content */}
      <main className="w-full md:w-4/5 p-4 bg-white rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: Details Rental */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">Details Rental</h3>
              <p className="text-sm">Nissan GT - R</p>
              <p className="text-xs text-gray-500">Sport Car</p>
              <p className="mt-2">
                Total Rental Price: <span className="text-lg font-bold">$80.00</span>
              </p>
            </CardContent>
          </Card>
          {/* Card 2: Top 5 Car Rental */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">Top 5 Car Rental</h3>
              <div className="w-full h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          {/* Card 3: Recent Transactions */}
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">Recent Transactions</h3>
              <ul className="text-sm space-y-2">
                {transactions.map((transaction, index) => (
                  <li key={index}>
                    {transaction.car} - {transaction.price}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}