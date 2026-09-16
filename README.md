# Slime//Evolution 3D

A procedural Three.js browser game about a slime that consumes weaker organisms, evolves through star tiers, and survives ten increasingly hostile sectors.

## Play

- **WASD / arrow keys:** move
- **Shift:** burst movement
- **Space:** pulse feedback
- **Esc:** pause

The first level starts with the player and Warden shielded. The first successful consume breaks the shields. AI organisms roam, pursue weaker targets, and flee stronger ones. Level populations and hazards are fixed per sector; respawns use random positions.

## Development

```bash
npm install
npm run dev
npm test
npm run lint
npm run build
```

## Asset strategy

The prototype uses procedural Three.js geometry and Web Audio tones so it can be hosted as a lightweight GitHub Pages application without unverified third-party asset licensing. The visual system is structured for later replacement with CC0 Blender exports and licensed audio.
