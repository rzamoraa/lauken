import React from "react";
import Header from "../components/Header";

import Contactus from "./components/Contactus";
import Description from "./components/Descripcion";
import Gallery from "./components/Gallery";
import Spect from "./components/Spect";
import Testimonial from "./components/Testimonials";
import Title from "./components/Title";
import Return from "./components/Return";
import Mapa from "./components/Mapa";
import Atributos from "./components/Atributos";




function ProyectoTres() {
  return (
    <div className="bg-white">
      <Header />

      <Title
        video={
          "https://videos.pexels.com/video-files/4934316/4934316-hd_1920_1080_30fps.mp4"
        }
      />
      <Description
        video={
          "https://videos.pexels.com/video-files/4934316/4934316-hd_1920_1080_30fps.mp4"
        }
      />

      <Gallery
        direccion="Machined Kettle"
        title="Elegant simplicity"
        subtitle1="Sleek design"
        subdes1="    The machined kettle has a smooth black finish and contemporary shape that stands apart from most plastic appliances."
        subtitle2="Comfort handle"
        subdes2="    Shaped for steady pours and insulated to prevent burns."
        subtitle3="One-button control"
        subdes3="    The one button control has a digital readout for setting temperature and turning the kettle on and off."
        subtitle4="Long spout"
        subdes4="    Designed specifically for controlled pour-overs that don't slash or sputter."
        image1="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        image2="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        image3="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <Atributos />

      <Spect
        title="Technical Specifications"
        descripcion="The Organize modular system offers endless options for arranging your favorite and most used items. Keep everything at reach and in its place, while dressing up your workspace."
        box1="Design"
        box2="Material"
        box3="Consideration"
        box4="Include"
        title1="Adaptive and modular"
        text1="The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup."
        image1="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title2="Natural wood options"
        text2="Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished."
        image2="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title3="Helpful around the home"
        text3="Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!"
        image3="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title4="Everything you'll need"
        text4="The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons."
        image4="https://images.pexels.com/photos/1165981/pexels-photo-1165981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <Mapa />

      <Contactus />

      <Return />
    </div>
  );
}


export default ProyectoTres;
