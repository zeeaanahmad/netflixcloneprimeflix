import React, { useContext, useState, useEffect } from "react";
import Fuse from "fuse.js";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Card, Header, Loading, Player } from "../components";
import { FooterContainer } from "./footer";
import * as ROUTES from "../constants/routes";
import logo from "../mylogo.png";

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [slideRows, setSlideRows] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  //profile starts empty
  //change loading to false when firebase data has been loaded
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  //load selected category into the slides array
  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });

    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="lunchbox" dontShowBg>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="site logo" />
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
              data-testid="series-link"
            >
              Shows
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
              data-testid="movies-link"
            >
              Movies
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureTitle>The LUNCHBOX</Header.FeatureTitle>
          <Header.Text>
          An unlikely mistake by a tiffin carrier service results in Ila's tiffin, that was made for her husband, being delivered to Saajan Fernandes. An unusual friendship soon develops between the two.
</Header.Text>

          <Player>
            <Player.Button />
            <Player.Video src={"/videos/v1.mp4"} />
          </Player>
        </Header.Feature>
      </Header>
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src={"/videos/v1.mp4"} />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
