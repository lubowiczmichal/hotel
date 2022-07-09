import { useState } from "react";
import "./PhotoGallery.css";
import PhotoGalleryItem from "./PhotoGalleryItem";
import { ButtonPrevNext } from "../CustomElements";

function PhotoGallery(props: { photos: string; size: number }) {
  const [start, setStart] = useState(0);

  const photos = Array.from(Array(3).keys());
  photos.forEach((_: any, index: any) => {
    photos[index] =
      (photos[index] + start) % props.size >= 0
        ? (photos[index] + start) % 10
        : props.size - Math.abs((photos[index] + start) % props.size);
  });

  return (
    <div className="PhotoGallery">
      <ButtonPrevNext className="Arrow" onClick={() => setStart(start - 1)}>
        &#8249;
      </ButtonPrevNext>

      {photos.map(function (item: Number) {
        return (
          <PhotoGalleryItem
            photos={props.photos}
            number={item}
            key={item as any}
          />
        );
      })}
      <ButtonPrevNext className="Arrow" onClick={() => setStart(start + 1)}>
        &#8250;
      </ButtonPrevNext>
    </div>
  );
}

export default PhotoGallery;
