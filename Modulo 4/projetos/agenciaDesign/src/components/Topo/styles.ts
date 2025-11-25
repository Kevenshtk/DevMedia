import styled, { css } from "styled-components";
import Image from "next/image";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { ThemesStyleType } from "@/types/themes";

export const Container = styled.header<ThemesStyleType>`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  background-color: ${(themes) => (themes.dark ? "#252525" : "#fff")};
`;

export const Button = styled.button<ThemesStyleType>`
  width: 35px;
  height: 35px;
  position: relative;
  background: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 20px;

  color: ${(themes) => (themes.dark ? "#ffff00" : "#000")};
  border: 1px solid ${(themes) => (themes.dark ? "#fff" : "#000")};
`;

const BaseIcon = css`
  position: absolute;
  top: 8px;
  left: 8px;
`;

export const IconDark = styled(MdDarkMode)`
  ${BaseIcon}
`;

export const IconLight = styled(MdLightMode)`
  ${BaseIcon}
`;

export const ImgLogo = styled(Image)`
  width: 50px;
  height: 35px;
`;
