function ProfilePhoto(props) {
  return (
    <img
      className={`profile-photo ${props.className}`}
      src={`/images/users/${props.authorPhoto}.jpg`}
      alt="img"
    />
  );
}

export default ProfilePhoto;
