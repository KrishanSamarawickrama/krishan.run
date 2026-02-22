import { registry } from './registry';
import { helpCommand } from './help';
import { aboutCommand } from './about';
import { skillsCommand } from './skills';
import { experienceCommand } from './experience';
import { educationCommand } from './education';
import { certsCommand } from './certs';
import { contactCommand } from './contact';
import { projectsCommand } from './projects';
import { neofetchCommand } from './neofetch';
import { themeCommand } from './theme';
import {
  whoamiCommand,
  clearCommand,
  dateCommand,
  echoCommand,
  sudoCommand,
  resumeCommand,
  socialCommand,
  languagesCommand,
  historyCommand,
} from './system';

// Register all commands
const commands = [
  helpCommand,
  aboutCommand,
  skillsCommand,
  experienceCommand,
  educationCommand,
  certsCommand,
  contactCommand,
  projectsCommand,
  neofetchCommand,
  themeCommand,
  whoamiCommand,
  clearCommand,
  dateCommand,
  echoCommand,
  sudoCommand,
  resumeCommand,
  socialCommand,
  languagesCommand,
  historyCommand,
];

commands.forEach(cmd => registry.register(cmd));

export { registry };
export { parseCommand } from './parser';
