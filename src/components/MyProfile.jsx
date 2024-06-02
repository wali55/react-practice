import Avatar from "./Avatar";

const MyProfile = () => {
  return (
    <div>
      <Avatar
        size={100}
        person={{
          name: "Wali",
          imageId: "123jhdf",
          imgSrc: "https://i.imgur.com/1bX5QH6.jpg",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Hasib",
          imageId: "df345",
          imgSrc: "https://i.imgur.com/YfeOqp2.jpg",
        }}
      />
      <Avatar
        person={{
          name: "Sakib",
          imageId: "1fg45",
          imgSrc: "https://i.imgur.com/OKS67lh.jpg",
        }}
      />
    </div>
  );
};

export default MyProfile;
