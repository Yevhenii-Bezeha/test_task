import { FeaturesTab } from "../featuresTab/FeaturesTab";
import { Header, HeaderButton } from "./Tabs.styled";
import { ReviewsTab } from "../reviewsTab/ReviewsTab";
import { useState } from "react";

export const Tabs = ({ car }) => {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <div>
      <Header>
        <HeaderButton active={activeTab === "features"}>
          <button onClick={() => setActiveTab("features")}>Features</button>
        </HeaderButton>
        <HeaderButton active={activeTab === "reviews"}>
          <button onClick={() => setActiveTab("reviews")}>Reviews</button>
        </HeaderButton>
      </Header>
      {activeTab === "features" && <FeaturesTab car={car} />}
      {activeTab === "reviews" && <ReviewsTab car={car} />}
    </div>
  );
};
