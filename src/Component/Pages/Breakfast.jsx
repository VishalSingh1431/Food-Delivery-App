import React from "react";
import Card from "./Card";

const Breakfast = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Card image="https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg" rating={4.5} name="Pancake" type="Veg" persons={1} price={199} />
      <Card image="https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg" rating={4.3} name="Omelet" type="Non-Veg" persons={1} price={149} />
      <Card image="https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg" rating={4.6} name="Toast" type="Veg" persons={1} price={99} />
      <Card image="https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg" rating={4.2} name="Paratha" type="Veg" persons={1} price={129} />
      <Card image="https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg" rating={4.7} name="Dosa" type="Veg" persons={1} price={159} />
      <Card image="https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg" rating={4.4} name="Waffle" type="Veg" persons={1} price={189} />
      <Card image="https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg" rating={4.1} name="Idli" type="Veg" persons={1} price={109} />
      <Card image="https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg" rating={4.8} name="Poha" type="Veg" persons={1} price={119} />
      <Card image="https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg" rating={4.5} name="Upma" type="Veg" persons={1} price={139} />
      <Card image="https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg" rating={4.3} name="Bacon" type="Non-Veg" persons={1} price={249} />
    </div>
  );
};

export default Breakfast;
