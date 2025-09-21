import React from "react";
import "./MemeGallery.css";

// Import semua 19 gambar
import m1 from "../assets/1.jpg";
import m2 from "../assets/2.jpg";
import m3 from "../assets/3.jpg";
import m4 from "../assets/4.jpg";
import m5 from "../assets/5.jpg";
import m6 from "../assets/6.jpg";
import m7 from "../assets/7.jpg";
import m8 from "../assets/8.jpg";
import m9 from "../assets/9.jpg";
import m10 from "../assets/10.jpg";
import m11 from "../assets/11.jpg";
import m12 from "../assets/12.jpg";
import m13 from "../assets/13.jpg";
import m14 from "../assets/14.jpg";
import m15 from "../assets/15.jpg";
import m16 from "../assets/16.jpg";
import m17 from "../assets/17.jpg";
import m18 from "../assets/18.jpg";
import m19 from "../assets/19.jpg";

const memes: string[] = [
  m1, m2, m3, m4, m5, m6, m7, m8, m9, m10,
  m11, m12, m13, m14, m15, m16, m17, m18, m19
];

const MemeGallery: React.FC = () => {
  // Baris desktop
  const firstRow = memes.slice(0, 10);
  const secondRow = memes.slice(10, 19);

  // Baris mobile (selang-seling)
  const mobileRows = [
    memes.slice(0, 5),
    memes.slice(5, 10),
    memes.slice(10, 15),
    memes.slice(15, 19)
  ];

  return (
    <div className="meme-gallery">
      {/* Desktop */}
      <div className="desktop-only">
        <div className="row scroll-right">
          {firstRow.concat(firstRow).map((img, i) => (
            <img key={i} src={img} alt={`meme-${i}`} />
          ))}
        </div>
        <div className="row scroll-left">
          {secondRow.concat(secondRow).map((img, i) => (
            <img key={i} src={img} alt={`meme-${i}`} />
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="mobile-only">
        {mobileRows.map((row, idx) => (
          <div
            key={idx}
            className={`row ${idx % 2 === 0 ? "scroll-right" : "scroll-left"}`}
          >
            {row.concat(row).map((img, i) => (
              <img key={i} src={img} alt={`meme-${i}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemeGallery;
