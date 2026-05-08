import React, { useMemo, useState } from 'react';
import {
  CardContainer,
  Container,
  Desc,
  ProjectMetric,
  SectionTop,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper,
} from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const filters = [
  { value: 'all', label: 'All' },
  { value: 'client projects', label: 'Client Projects' },
  { value: 'evm dApp', label: 'EVM dApps' },
  { value: 'solana', label: 'Solana' },
  { value: 'sui', label: 'SUI' },
  { value: 'ton', label: 'TON' },
];

const normalizeCategories = (category) => {
  if (Array.isArray(category)) return category.map((item) => item.toLowerCase().trim());
  return [category?.toLowerCase().trim()].filter(Boolean);
};

const Projects = ({ setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  const filteredProjects = useMemo(() => {
    if (toggle === 'all') return projects;
    return projects.filter((project) =>
      normalizeCategories(project.category).includes(toggle.toLowerCase().trim())
    );
  }, [toggle]);

  const filterCounts = useMemo(
    () =>
      filters.reduce((counts, filter) => {
        if (filter.value === 'all') {
          counts[filter.value] = projects.length;
          return counts;
        }
        counts[filter.value] = projects.filter((project) =>
          normalizeCategories(project.category).includes(filter.value.toLowerCase())
        ).length;
        return counts;
      }, {}),
    []
  );

  return (
    <Container id="projects">
      <Wrapper>
        <SectionTop>
          <div>
            <Title>Projects</Title>
            <Desc>
              Production-style work across Web2, Web3, trading automation, Telegram bots,
              marketplaces, reward engines, and smart contract systems.
            </Desc>
          </div>
          <ProjectMetric>
            <strong>{projects.length}</strong>
            <span>Featured builds</span>
          </ProjectMetric>
        </SectionTop>

        <ToggleButtonGroup aria-label="Project filters">
          {filters.map((filter) => (
            <ToggleButton
              key={filter.value}
              type="button"
              $active={toggle === filter.value}
              onClick={() => setToggle(filter.value)}
            >
              {filter.label} ({filterCounts[filter.value]})
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              setOpenModal={setOpenModal}
              index={index}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
