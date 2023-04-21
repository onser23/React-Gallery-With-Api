import { useEffect } from "react";
import { Card, Image, List, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  setPreviewImages,
  setLoading,
  setAllGallery,
} from "../redux/actions/GalleryActions";
import Header from "../components/Header";

const Home = () => {
  const dispatch = useDispatch();
  const { GeneralResponse } = useSelector((state) => state);

  useEffect(() => {
    dispatch(setLoading(true));
    fetch(
      `https://dummyjson.com/products/search?q=${GeneralResponse.searcedText}`
    )
      .then((res) => res.json())
      .then((response) => {
        dispatch(setAllGallery(response.products));
        dispatch(setLoading(false));
      });
  }, [GeneralResponse.searcedText]);
  return (
    <Space style={{ padding: "0px 16px" }} direction="vertical">
      <Header />
      <Typography.Text>
        Showing results for:
        <Typography.Text style={{ fontWeight: "bold" }}>
          {GeneralResponse.searcedText || "ALL"}
        </Typography.Text>
      </Typography.Text>
      <List
        loading={GeneralResponse.loading}
        dataSource={GeneralResponse.allGallery}
        grid={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
        renderItem={(item) => {
          return (
            <Card
              hoverable
              key={item.id}
              style={{
                height: "auto",
                margin: "10px",
              }}
            >
              <Image
                src={item.thumbnail}
                preview={{ visible: false }}
                onClick={() => {
                  dispatch(setPreviewImages(item.images));
                }}
                style={{
                  height: 300,
                }}
              ></Image>
            </Card>
          );
        }}
      />
      {GeneralResponse.previewImages.length > 0 ? (
        <Image.PreviewGroup
          preview={{
            visible: GeneralResponse.previewImages.length,
            onVisibleChange: (value) => {
              if (!value) {
                dispatch(setPreviewImages([]));
              }
            },
          }}
        >
          {GeneralResponse.previewImages.map((image) => {
            return <Image key={image} src={image} />;
          })}
        </Image.PreviewGroup>
      ) : null}
    </Space>
  );
};

export default Home;
