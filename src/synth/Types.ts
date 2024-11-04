export type WaveForm = "sine" | "square" | "triangle" | "sawtooth";

export type UnisonConfig = { enabled: false } | {
    enabled: true,
    waveForm: WaveForm,
    detune: number,
    gain: number,
};

export type FilterConfig = {
    frequency: number,
    resonance: number,
}

export type ADSREnvelope = {
    attack: number,
    decay: number,
    sustain: number,
    release: number,
};

export type FilterEnvelope = ADSREnvelope & {
    frequencyMin: number,
    frequencyMax: number,
}

export type EchoConfig = {
    delay: number,
    feedback: number,
}

export type SynthConfig = {
    waveForm: WaveForm,

    unisons: UnisonConfig[],

    filter: FilterConfig,

    volumeEnvelope: ADSREnvelope,

    // Filter envelope will go from frequencyMin to frequencyMax
    // Then sustain at filter.frequency
    // Then release to frequencyMin
    filterEnvelope: FilterEnvelope,

    echo: EchoConfig,
};

// TODO: Implement EffectsChain and NoteChain as a class for type safety
// This is technically not type safe since one of the nodes can be a source
export type EffectsChain = AudioNode[];

// NoteChain is the result of a note being played.
export type NoteChain = [OscillatorNode[], EffectsChain];