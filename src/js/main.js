'use strict';

//TODO: inject by interface
//TODO: inject via constructor or any other way to decrease amount of nonsence to write for getter/setter
//TODO: make sure that instances inside proiders are also created as required

/*==========================*/
/*auto-injection from context*/
/*==========================*/

import SampleContext from './context/SampleContext'
import Duck from './vo/Duck'

var sampleContext = new SampleContext();
sampleContext.bootstrap();

const duck = new Duck('Koko');
duck.quack();


/*==========================*/
/*manual injection*/
/*==========================*/

import FakeQuackBehaviour from './behaviours/FakeQuackBehaviour'

const duckManual = new Duck('Koko');
duckManual.quackBehaviour = new FakeQuackBehaviour();
duckManual.quack();