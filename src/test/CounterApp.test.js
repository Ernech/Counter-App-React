import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Teast at <CounterApp/> component', () => {
            let wrapper = shallow( < CounterApp /
                >
            );
            beforeEach(() => {

                wrapper = shallow( < CounterApp /
                    >
                );
            });
            test('should show <CounterApp/> correctly', () => {


                expect(wrapper).toMatchSnapshot();
            });

            test('should show the default value 100', () => {
                const value = 100;
                const wrapper = shallow( < CounterApp value = { value }
                    / >
                );
                const textoValor = wrapper.find('h2').text().trim();
                expect(textoValor).toBe("100");

            });

            test('should increment the value +1', () => {
                wrapper.find('button').at(0).simulate('click');
                const textoValor = wrapper.find('h2').text().trim();
                expect(textoValor).toBe("11");
            });
            test('should decrease the value -1', () => {
                wrapper.find('button').at(2).simulate('click');


                const textoValor = wrapper.find('h2').text().trim();
                expect(textoValor).toBe("9");
            });

            test('should show the default value woth reset', () => {
                    const wrapper = shallow( < CounterApp value = { 105 }
                        />);
                        wrapper.find('button').at(0).simulate('click'); wrapper.find('button').at(0).simulate('click'); wrapper.find('button').at(1).simulate('click');
                        const textoValor = wrapper.find('h2').text().trim(); expect(textoValor).toBe("105");
                    });
            });