import Flex from "./Flex";
import { FlexOne } from "./Flex";
import { FlexCenterAling } from "./Flex";

import ProfilePhoto from "./ProfilePhoto";
import {
  FacebookLink,
  TwitterLink,
  InstagramLink,
  Message,
} from "./SocialLink";

function Post(props) {
  let text = props.text.split("\n");
  text = text.map((item, index) => <p key={index}>{item}</p>);

  let info = Object.entries(props.info);
  info = info.map((item, index) => (
    <InfoLabel key={index} label={item[0]} info={item[1]}></InfoLabel>
  ));

  return (
    <div className="post shadow">
      <Flex className="post__header">
        <FlexOne className="post__info shadow">
          <span>created by:</span>
          <div className="info__author">
            <ProfilePhoto authorPhoto={props.authorPhoto}></ProfilePhoto>
            <h1>{props.authorName}</h1>
          </div>
          <FlexCenterAling className="author-social-links">
            <Message href="#"></Message>
            <FacebookLink href="#"></FacebookLink>
            <TwitterLink href="#"></TwitterLink>
            <InstagramLink href="#"></InstagramLink>
          </FlexCenterAling>
        </FlexOne>

        <FlexOne className="post__info-post">
          <img
            className="shadow"
            src={`/images/posts/${props.imgCover}.jpg`}
            alt="img"
          />
          <div className="info">{info}</div>
        </FlexOne>
      </Flex>

      <div className="post__content">
        <h1>{props.title}</h1>
        {text}
      </div>
    </div>
  );
}

function InfoLabel(props) {
  return (
    <Flex className="info-label">
      <h2>{props.label}:</h2>
      <span>{props.info}</span>
    </Flex>
  );
}

export default Post;
