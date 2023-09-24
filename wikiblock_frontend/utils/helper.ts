import { GOOGLE_SHEET_URL } from "@config/env";
import { fetchAPI } from "@utils/axiosBaseQuery";
import Cookies from "js-cookie";

export const logout = () => {
  localStorage.clear();
  Object.keys(Cookies.get()).forEach(function (cookieName) {
    Cookies.remove(cookieName);
  });
  window.location.reload();
};

export const getLetterAvatar = (name: string) => {
  const splitData = name.split(" ");
  return `${splitData[splitData.length - 1][0]}${splitData[0][0]}`;
};

export const formatSortOrder = (order: "ascend" | "descend") => {
  if (order === "ascend") {
    return "asc";
  }

  if (order === "descend") {
    return "desc";
  }
};

// Go through images and check if they are uploaded to s3,
// if not upload them to s3 and return the url
export const uploadImages = async (imageURLs: string[]) => {
  const formattedImages = await Promise.all(
    imageURLs.map(async (imageURL) => {
      let picture = "";
      let imgData: any = imageURL;

      if (!imageURL.startsWith("http")) {
        imgData = new FormData();
        const blob = await fetch(imageURL).then((res) => res.blob());
        imgData.append("file", blob, "test.png");

        const { data } = await fetchAPI({
          url: "/upload/images",
          method: "POST",
          body: imgData,
        });
        picture = data?.url;
      } else {
        picture = imageURL;
      }
      return picture;
    })
  );

  return formattedImages;
};

// Format a number
// Input: 123456.789
// Output: 123.456,789
export const formatNumber = (number: number | undefined) => {
  if (number == null) return 0;
  return new Intl.NumberFormat().format(number || 0);
};

export const formatDatetime = (
  datestring: string,
  format: "date" | "datetime" = "date"
) => {
  const date = new Date(datestring);
  if (format === "date")
    return date.toLocaleString("en-GB", { dateStyle: "short" });
  return date.toLocaleString("en-GB", {
    dateStyle: "short",
    timeStyle: "short",
  });
};

export const registerEvent = (values: any) => {
  try {
    return fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      body: values,
    });
  } catch (error) {
    return error;
  }
};
