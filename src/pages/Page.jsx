import React from "react";
import CustomText from "../components/CustomText";
import axios from "axios";

const Page = () => {
  // 어떤 Hooks을 사용하면 Url을 Parameter로 받아 올 수 있을까요?//
  const { pageId } = '여기를 채워주세요';
  axios
  .get(pageId)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
  return (
    <>
      <CustomText typography="h1" bold>
        Page {pageId} 입니다
      </CustomText>
      <CustomText typography="p">{`페이지 주소는 ${pageId} 입니다`}</CustomText>
    </>
  );
};

export default Page;
