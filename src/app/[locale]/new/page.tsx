"use client";
import { useState } from "react";
import { Layout, Menu, Card, Row, Col } from "antd";
import Image from "next/image";

const { Header, Content, Footer, Sider } = Layout;

const games = Array.from({ length: 30 }, (_, index) => ({
  title: `Game ${index + 1}`,
  image: `/game${index + 1}.jpg`,
}));

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-screen bg-gray-900 text-white">
      <Header className="flex items-center justify-between bg-gray-800 p-4">
        <div className="text-2xl font-bold flex items-center gap-2"></div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className="flex-1 justify-end hidden md:flex"
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Apps</Menu.Item>
          <Menu.Item key="3">Premium</Menu.Item>
          <Menu.Item key="4">Support</Menu.Item>
        </Menu>
      </Header>

      <Layout>
        <Sider
          width={600}
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          className="bg-gray-800 hidden md:block"
        ></Sider>

        <Layout className="p-6 w-full">
          <Content>
            <h1 className="text-4xl font-bold text-center md:text-left">
              All Games
            </h1>
            {Array.from({ length: 3 }, (_, rowIndex) => (
              <Row
                gutter={[8, 8]}
                className="mt-4"
                key={rowIndex}
                justify="center"
              >
                {games
                  .slice(rowIndex * 10, (rowIndex + 1) * 10)
                  .map((game, index) => (
                    <Col
                      key={index}
                      xs={12}
                      sm={8}
                      md={6}
                      lg={3}
                      xl={2}
                      className="flex justify-center"
                    >
                      <Card
                        className="bg-gray-700 text-white hover:shadow-xl w-full"
                        cover={
                          <Image
                            src={game.image}
                            alt={game.title}
                            width={155}
                            height={218}
                            className="w-full"
                          />
                        }
                      >
                        <h2 className="text-center text-sm font-bold">
                          {game.title}
                        </h2>
                      </Card>
                    </Col>
                  ))}
              </Row>
            ))}
          </Content>
        </Layout>
      </Layout>

      <Footer className="text-center bg-gray-800 p-4 mt-6">
        <p>2025 &copy; Tracker Network</p>
      </Footer>
    </Layout>
  );
}
