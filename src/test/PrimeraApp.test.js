import '@testing-library/jest-dom';
import React from 'react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Test at <PrimeraApp component/>', () => {
            // test('must show msg "Hello I am Mario" ', () => {
            //         const saludo = "Hello I am Mario";

            //         const { getByText } = render( < PrimeraApp saludo = { saludo }
            //             / > );

            //             expect(getByText(saludo)).toBeInTheDocument();
            //         });

            test('should show "<PrimeraApp/> correctly" ', () => {
                    const saludo = "Hello I am Mario";

                    const wrapper = shallow( < PrimeraApp saludo = { saludo }
                        / > );
                        expect(wrapper).toMatchSnapshot();
                    });

                test('should return a subtible send by props', () => {
                        const saludo = "Hello I am Mario";
                        const subtitulo = "and i am a subtitle";
                        const wrapper = shallow( < PrimeraApp saludo = { saludo }
                            subtitulo = { subtitulo }
                            / > );

                            const textoParrafo = wrapper.find('p').text(); console.log(textoParrafo); expect(textoParrafo).toBe(subtitulo)
                        });


                });