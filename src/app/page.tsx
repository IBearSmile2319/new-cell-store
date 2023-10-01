"use client"

import { Button, Space } from "antd";
import { ButtonWrapper } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Space style={{ padding: 24 }} size="large">
        <ButtonWrapper name="hola" happy/>
      </Space>
    </main>
  )
}
