import React from 'react';

export const ChristianversLootASimpleConv3dExampleWithKeras_1: React.FC = () => {
    return (
        <pre>
            <code>
            {`    
    # Create the model
    model = Sequential()
    model.add(Conv3D(32, kernel_size=(3, 3, 3), activation='relu', kernel_initializer='he_uniform', input_shape=sample_shape))
    model.add(MaxPooling3D(pool_size=(2, 2, 2)))
    model.add(Conv3D(64, kernel_size=(3, 3, 3), activation='relu', kernel_initializer='he_uniform'))
    model.add(MaxPooling3D(pool_size=(2, 2, 2)))
    model.add(Flatten())
    model.add(Dense(256, activation='relu', kernel_initializer='he_uniform'))
    model.add(Dense(no_classes, activation='softmax'))`}
            </code>
        </pre>
    );
};
export default ChristianversLootASimpleConv3dExampleWithKeras_1;
