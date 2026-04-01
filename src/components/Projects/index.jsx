import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web2 apps to web3,
          here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "evm dApp" ? (
            <ToggleButton
              active
              value="evm dApp"
              onClick={() => setToggle("evm dApp")}
            >
              EVM DApp's
            </ToggleButton>
          ) : (
            <ToggleButton
              value="evm dApp"
              onClick={() => setToggle("evm dApp")}
            >
              EVM DApp's
            </ToggleButton>
          )}
          <Divider />
          {toggle === "client projects" ? (
            <ToggleButton
              active
              value="client projects"
              onClick={() => setToggle("client projects")}
            >
              Client Projects
            </ToggleButton>
          ) : (
            <ToggleButton
              value="client projects"
              onClick={() => setToggle("client projects")}
            >
              Client Projects
            </ToggleButton>
          )}
          <Divider />
          {toggle === "solana" ? (
            <ToggleButton
              active
              value="solana"
              onClick={() => setToggle("solana")}
            >
              Solana
            </ToggleButton>
          ) : (
            <ToggleButton value="solana" onClick={() => setToggle("solana")}>
              Solana
            </ToggleButton>
          )}
          <Divider />
          {toggle === "sui" ? (
            <ToggleButton active value="sui" onClick={() => setToggle("sui")}>
              SUI
            </ToggleButton>
          ) : (
            <ToggleButton value="sui" onClick={() => setToggle("sui")}>
              SUI
            </ToggleButton>
          )}
          <Divider />
          <Divider />
          {toggle === "ton" ? (
            <ToggleButton active value="ton" onClick={() => setToggle("ton")}>
              TON
            </ToggleButton>
          ) : (
            <ToggleButton value="ton" onClick={() => setToggle("ton")}>
              TON
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => {
              const category = Array.isArray(item.category)
                ? item.category.map((c) => c.toLowerCase().trim())
                : [item.category.toLowerCase().trim()];

              return category.includes(toggle.toLowerCase().trim());
            })
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
