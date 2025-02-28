export interface ToyApp {
  id: string;
  title: string;
  description: string;
  path: string;
  tags: string[];
  bgClass: string;
}

export const toyApps: ToyApp[] = [
  {
    id: 'neural-playground',
    title: 'Neural Playground',
    description: 'Interactive neural network visualizer and playground. Build, train, and test neural networks directly in your browser.',
    path: '/neural-playground',
    tags: ['ML', 'WebGL', 'TensorFlow.js', 'Interactive'],
    bgClass: 'bg-gradient-to-br from-gray-900 to-purple-900'
  },
  {
    id: 'ar-object-detection',
    title: 'AR Object Detection',
    description: 'Real-time object detection using your camera with augmented reality overlays. WebXR powered experience.',
    path: '/ar-detection',
    tags: ['WebXR', 'ML', 'Camera API', 'TensorFlow.js'],
    bgClass: 'bg-gradient-to-br from-gray-900 to-blue-900'
  },
  {
    id: 'voice-commander',
    title: 'Voice Commander',
    description: 'Control your browser with voice commands using speech recognition and natural language processing.',
    path: '/voice-commander',
    tags: ['Web Speech API', 'ML', 'Accessibility'],
    bgClass: 'bg-gradient-to-br from-gray-900 to-emerald-900'
  },
  {
    id: 'quantum-simulator',
    title: 'Quantum Simulator',
    description: 'Simulate quantum computing algorithms and visualize quantum gates in an interactive playground.',
    path: '/quantum-sim',
    tags: ['WebAssembly', 'Physics', 'Visualization'],
    bgClass: 'bg-gradient-to-br from-gray-900 to-amber-900'
  },
  {
    id: 'neural-art-gen',
    title: 'Neural Art Generator',
    description: 'Create art with neural networks. Style transfer, GANs, and other ML-powered creative tools.',
    path: '/neural-art',
    tags: ['ML', 'Canvas API', 'Creative', 'TensorFlow.js'],
    bgClass: 'bg-gradient-to-br from-gray-900 to-rose-900'
  },
  {
    id: 'p2p-filesharing',
    title: 'P2P Filesharing',
    description: 'Secure peer-to-peer file sharing with no server. Uses WebRTC and local encryption.',
    path: '/p2p-share',
    tags: ['WebRTC', 'Crypto API', 'P2P'],
    bgClass: 'bg-gradient-to-br from-gray-900 to-teal-900'
  },
  {
    id: 'gesture-controlled-synth',
    title: 'Gesture Synth',
    description: 'Make music with hand gestures. ML-powered hand tracking creates an invisible instrument you can play.',
    path: '/gesture-synth',
    tags: ['Web Audio', 'ML', 'MediaPipe', 'Interactive'],
    bgClass: 'bg-gradient-to-br from-gray-900 to-indigo-900'
  },
  {
    id: 'cyberdeck',
    title: 'Cyberdeck Terminal',
    description: 'Futuristic terminal interface with cyberpunk aesthetic. Includes virtual filesystem and retro-futuristic UI.',
    path: '/cyberdeck',
    tags: ['WebGL', 'Animation', 'UI Experiment'],
    bgClass: 'bg-gradient-to-br from-gray-900 to-red-900'
  },
  {
    id: 'brain-computer-interface',
    title: 'BCI Experiment',
    description: 'Experimental brain-computer interface using consumer EEG headsets. Control web interfaces with your thoughts.',
    path: '/bci-experiment',
    tags: ['Web Bluetooth', 'ML', 'Experimental'],
    bgClass: 'bg-gradient-to-br from-gray-900 to-fuchsia-900'
  }
]; 