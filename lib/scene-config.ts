export type SceneId = 'intro' | 'vision' | 'capabilities' | 'approach' | 'contact';

export interface SceneConfig {
  id: SceneId;
  title: string;
  hudText: string;
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
  backgroundColor: string;
}

export const SCENES: Record<SceneId, SceneConfig> = {
  intro: {
    id: 'intro',
    title: 'Entry Portal',
    hudText: 'Initializing experience…',
    cameraPosition: [0, 0, 10],
    cameraTarget: [0, 0, 0],
    backgroundColor: '#0a0e1a',
  },
  vision: {
    id: 'vision',
    title: 'Vision',
    hudText: 'Defining direction…',
    cameraPosition: [5, 3, 8],
    cameraTarget: [0, 0, 0],
    backgroundColor: '#0d1020',
  },
  capabilities: {
    id: 'capabilities',
    title: 'Capabilities',
    hudText: 'Mapping systems…',
    cameraPosition: [0, 4, 12],
    cameraTarget: [0, 0, 0],
    backgroundColor: '#0f1228',
  },
  approach: {
    id: 'approach',
    title: 'Approach',
    hudText: 'Revealing architecture…',
    cameraPosition: [-3, 2, 10],
    cameraTarget: [0, 0, 0],
    backgroundColor: '#0a0e1a',
  },
  contact: {
    id: 'contact',
    title: 'Contact',
    hudText: 'Destination reached.',
    cameraPosition: [0, 1, 6],
    cameraTarget: [0, 0, 0],
    backgroundColor: '#080b15',
  },
};

export const SCENE_ORDER: SceneId[] = ['intro', 'vision', 'capabilities', 'approach', 'contact'];

export const getNextScene = (currentScene: SceneId): SceneId | null => {
  const currentIndex = SCENE_ORDER.indexOf(currentScene);
  if (currentIndex === -1 || currentIndex === SCENE_ORDER.length - 1) {
    return null;
  }
  return SCENE_ORDER[currentIndex + 1];
};

export const getPrevScene = (currentScene: SceneId): SceneId | null => {
  const currentIndex = SCENE_ORDER.indexOf(currentScene);
  if (currentIndex <= 0) {
    return null;
  }
  return SCENE_ORDER[currentIndex - 1];
};
