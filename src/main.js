'use strict';

//TODO: inject by interface
//TODO: inject via constructor or any other way to descrease amount of nonsence to write for getter/setter
//TODO: make sure that instances inside proiders are also created as required

import Duck from './di-test/Duck'
import SampleContext from './di-test/context/SampleContext'
import FakeQuackBehaviour from './di-test/behaviours/FakeQuackBehaviour'

var sampleContext = new SampleContext();
sampleContext.bootstrap();

const duck = new Duck('Koko');
duck.quack();

const duckManual = new Duck('Koko');
duckManual.quackBehaviour = new FakeQuackBehaviour();
duckManual.quack();