import React from "react";
import { FooterStyled, FooterContainer, FooterTitle } from "./Footer.style";
import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        footer
        <FooterTitle> Quem Somos </FooterTitle>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, similique sapiente deserunt iure esse vero doloremque
          at rerum est laudantium, iusto delectus hic, excepturi dignissimos eos
          reiciendis? A, quo dolores?
        </Typography>
        <FooterTitle> Baixe nossos aplicativos. </FooterTitle>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
