"use client"

import { ButtonWrapper } from "@/components";
import { Space } from "antd";

export default function Home() {
  return (
    <main>
      <Space style={{ padding: 24 }} size="large">
        <ButtonWrapper name="maicol"
          showEffect="showShakeEffect"
          type="primary"
        />
      </Space>
    </main>
  )
}
