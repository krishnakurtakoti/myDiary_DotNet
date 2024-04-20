import React from 'react';

const DspLib_FFT_DFT_Fourier_Transform_Library_For_NET6: React.FC = () => {
    return (
        <pre style={{ backgroundColor: '#fffacd', textShadow: 'none' }}>
            <code>
                {`
void example1()
{
    // Generate a test signal,
    // 1 Vrms at 20,000 Hz
    // Sampling Rate = 100,000 Hz
    // DFT Length is 1000 Points
    double amplitude = 1.0;
    double frequency = 20000;
    UInt32 length = 1000;
    double samplingRate = 100000;

    double[] inputSignal = DSP.Generate.ToneSampling(amplitude, frequency, samplingRate, length);

    // Instantiate a new DFT
    DFT dft = new DFT();

    // Initialize the DFT
    // You only need to do this once or if you change any of the DFT parameters.
    dft.Initialize(length);

    // Call the DFT and get the scaled spectrum back
    Complex[] cSpectrum = dft.Execute(inputSignal);

    // Convert the complex spectrum to magnitude
    double[] lmSpectrum = DSP.ConvertComplex.ToMagnitude(cSpectrum);

    // Note: At this point, lmSpectrum is a 501 byte array that 
    // contains a properly scaled Spectrum from 0 - 50,000 Hz (1/2 the Sampling Frequency)

    // For plotting on an XY Scatter plot, generate the X Axis frequency Span
    double[] freqSpan = dft.FrequencySpan(samplingRate);

    // At this point a XY Scatter plot can be generated from,
    // X axis => freqSpan
    // Y axis => lmSpectrum

    // In this example, the maximum value of 1 Vrms is located at bin 200 (20,000 Hz)
}
                `}
            </code>
        </pre>
    );
};




export default DspLib_FFT_DFT_Fourier_Transform_Library_For_NET6;
