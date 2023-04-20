import { Card, Image, Input, List, Space, Typography } from "antd";
import { useState, useEffect } from "react";

const App = () => {
  const [searcedText, setSearcedText] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const [loading, setloading] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    setloading(true);
    fetch(`https://dummyjson.com/products/search?q=${searcedText}`)
      .then((res) => res.json())
      .then((response) => {
        setDataSource(response.products);
        setloading(false);
      });
  }, [searcedText]);

  return (
    <Space style={{ padding: "0px 16px" }} direction="vertical">
      <Typography.Title style={{ textAlign: "center" }}>
        Gallery
      </Typography.Title>
      <Input.Search
        style={{ maxWidth: 500, display: "flex", margin: "auto" }}
        onSearch={(value) => {
          setSearcedText(value);
        }}
      ></Input.Search>
      <Typography.Text>
        Showing results for:{" "}
        <Typography.Text style={{ fontWeight: "bold" }}>
          {searcedText || "ALL"}
        </Typography.Text>
      </Typography.Text>
      <List
        loading={loading}
        dataSource={dataSource}
        grid={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
        renderItem={(item) => {
          return (
            <Card
              hoverable
              key={item.id}
              style={{
                height: "auto",
                // overflow: "hidden",
                margin: "10px",
              }}
            >
              <Image
                src={item.thumbnail}
                preview={{ visible: false }}
                onClick={() => {
                  setPreviewImages(item.images);
                }}
                style={{
                  height: 300,
                }}
              ></Image>
            </Card>
          );
        }}
      />
      {previewImages.length > 0 ? (
        <Image.PreviewGroup
          preview={{
            visible: previewImages.length,
            onVisibleChange: (value) => {
              if (!value) {
                setPreviewImages([]);
              }
            },
          }}
        >
          {previewImages.map((image) => {
            return <Image key={image} src={image} />;
          })}
        </Image.PreviewGroup>
      ) : null}
    </Space>
  );
};

export default App;
