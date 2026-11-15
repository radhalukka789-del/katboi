gdjs.RECode = {};
gdjs.RECode.localVariables = [];
gdjs.RECode.idToCallbackMap = new Map();
gdjs.RECode.forEachIndex2 = 0;

gdjs.RECode.forEachObjects2 = [];

gdjs.RECode.forEachTemporary2 = null;

gdjs.RECode.forEachTotalCount2 = 0;

gdjs.RECode.GDWallObjects1= [];
gdjs.RECode.GDWallObjects2= [];
gdjs.RECode.GDWallObjects3= [];
gdjs.RECode.GDWallObjects4= [];
gdjs.RECode.GDFloorObjects1= [];
gdjs.RECode.GDFloorObjects2= [];
gdjs.RECode.GDFloorObjects3= [];
gdjs.RECode.GDFloorObjects4= [];
gdjs.RECode.GDCeilingObjects1= [];
gdjs.RECode.GDCeilingObjects2= [];
gdjs.RECode.GDCeilingObjects3= [];
gdjs.RECode.GDCeilingObjects4= [];
gdjs.RECode.GDCeilingLightObjects1= [];
gdjs.RECode.GDCeilingLightObjects2= [];
gdjs.RECode.GDCeilingLightObjects3= [];
gdjs.RECode.GDCeilingLightObjects4= [];
gdjs.RECode.GDPromptTextObjects1= [];
gdjs.RECode.GDPromptTextObjects2= [];
gdjs.RECode.GDPromptTextObjects3= [];
gdjs.RECode.GDPromptTextObjects4= [];
gdjs.RECode.GDFurnitureObjects1= [];
gdjs.RECode.GDFurnitureObjects2= [];
gdjs.RECode.GDFurnitureObjects3= [];
gdjs.RECode.GDFurnitureObjects4= [];
gdjs.RECode.GDChairPartObjects1= [];
gdjs.RECode.GDChairPartObjects2= [];
gdjs.RECode.GDChairPartObjects3= [];
gdjs.RECode.GDChairPartObjects4= [];
gdjs.RECode.GDTermPanelObjects1= [];
gdjs.RECode.GDTermPanelObjects2= [];
gdjs.RECode.GDTermPanelObjects3= [];
gdjs.RECode.GDTermPanelObjects4= [];
gdjs.RECode.GDTermTextObjects1= [];
gdjs.RECode.GDTermTextObjects2= [];
gdjs.RECode.GDTermTextObjects3= [];
gdjs.RECode.GDTermTextObjects4= [];
gdjs.RECode.GDBtnYesObjects1= [];
gdjs.RECode.GDBtnYesObjects2= [];
gdjs.RECode.GDBtnYesObjects3= [];
gdjs.RECode.GDBtnYesObjects4= [];
gdjs.RECode.GDBtnNoObjects1= [];
gdjs.RECode.GDBtnNoObjects2= [];
gdjs.RECode.GDBtnNoObjects3= [];
gdjs.RECode.GDBtnNoObjects4= [];
gdjs.RECode.GDJumpscare1Objects1= [];
gdjs.RECode.GDJumpscare1Objects2= [];
gdjs.RECode.GDJumpscare1Objects3= [];
gdjs.RECode.GDJumpscare1Objects4= [];
gdjs.RECode.GDJumpscare2Objects1= [];
gdjs.RECode.GDJumpscare2Objects2= [];
gdjs.RECode.GDJumpscare2Objects3= [];
gdjs.RECode.GDJumpscare2Objects4= [];
gdjs.RECode.GDJumpscare3Objects1= [];
gdjs.RECode.GDJumpscare3Objects2= [];
gdjs.RECode.GDJumpscare3Objects3= [];
gdjs.RECode.GDJumpscare3Objects4= [];
gdjs.RECode.GDEyelidsObjects1= [];
gdjs.RECode.GDEyelidsObjects2= [];
gdjs.RECode.GDEyelidsObjects3= [];
gdjs.RECode.GDEyelidsObjects4= [];
gdjs.RECode.GDRestartTextObjects1= [];
gdjs.RECode.GDRestartTextObjects2= [];
gdjs.RECode.GDRestartTextObjects3= [];
gdjs.RECode.GDRestartTextObjects4= [];
gdjs.RECode.GDJumpscare4Objects1= [];
gdjs.RECode.GDJumpscare4Objects2= [];
gdjs.RECode.GDJumpscare4Objects3= [];
gdjs.RECode.GDJumpscare4Objects4= [];
gdjs.RECode.GDJumpscare5Objects1= [];
gdjs.RECode.GDJumpscare5Objects2= [];
gdjs.RECode.GDJumpscare5Objects3= [];
gdjs.RECode.GDJumpscare5Objects4= [];


gdjs.RECode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber() > 80);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(80);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber() < -80);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(-80);
}
}

}


};gdjs.RECode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(26).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(26).setNumber(-1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(-1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() != 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(26).mul(0.7071);
}
{runtimeScene.getScene().getVariables().getFromIndex(25).mul(0.7071);
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber(runtimeScene.getScene().getVariables().getFromIndex(28).getAsNumber() + ((-(Math.sin(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber()))) * runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber() + Math.cos(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber()) * 260 - runtimeScene.getScene().getVariables().getFromIndex(28).getAsNumber()) * Math.min(1, 12 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() + ((-(Math.cos(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber()))) * runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber() - Math.sin(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber())) * runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber()) * 260 - runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber()) * Math.min(1, 12 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
{runtimeScene.getScene().getVariables().getFromIndex(33).add(runtimeScene.getScene().getVariables().getFromIndex(28).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{runtimeScene.getScene().getVariables().getFromIndex(32).add(runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber() > 265);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(265);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber() < -265);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(-265);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber() > 265);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(265);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber() < -265);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(-265);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber()) < 135);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber() < -20);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(-20);
}
}

}


};gdjs.RECode.eventsList2 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.sqrt((runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber()) * (runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber()) + (runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber() - 55) * (runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber() - 55)) < 150);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.RECode.GDPromptTextObjects2);
{for(var i = 0, len = gdjs.RECode.GDPromptTextObjects2.length ;i < len;++i) {
    gdjs.RECode.GDPromptTextObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.RECode.GDPromptTextObjects1);
{for(var i = 0, len = gdjs.RECode.GDPromptTextObjects1.length ;i < len;++i) {
    gdjs.RECode.GDPromptTextObjects1[i].hide();
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.RECode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber() >= 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TermPanel"), gdjs.RECode.GDTermPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("TermText"), gdjs.RECode.GDTermTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("type1");
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("you should not be here");
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typeTimer");
}
{for(var i = 0, len = gdjs.RECode.GDTermPanelObjects1.length ;i < len;++i) {
    gdjs.RECode.GDTermPanelObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.RECode.GDTermTextObjects1.length ;i < len;++i) {
    gdjs.RECode.GDTermTextObjects1[i].hide(false);
}
}
}

}


};gdjs.RECode.eventsList4 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("e1", variable);
}
gdjs.RECode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber() < 2);
}
if (isConditionTrue_0) {
{gdjs.RECode.localVariables[1].getFromIndex(0).setNumber((gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber() / 2) * (gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber() / 2) * (3 - 2 * (gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber() / 2)));
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(runtimeScene.getScene().getVariables().getFromIndex(23).getAsNumber() + (0 - runtimeScene.getScene().getVariables().getFromIndex(23).getAsNumber()) * gdjs.RECode.localVariables[1].getFromIndex(0).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(runtimeScene.getScene().getVariables().getFromIndex(22).getAsNumber() + (55 - runtimeScene.getScene().getVariables().getFromIndex(22).getAsNumber()) * gdjs.RECode.localVariables[1].getFromIndex(0).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(31).setNumber(runtimeScene.getScene().getVariables().getFromIndex(21).getAsNumber() + (120 - runtimeScene.getScene().getVariables().getFromIndex(21).getAsNumber()) * gdjs.RECode.localVariables[1].getFromIndex(0).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(runtimeScene.getScene().getVariables().getFromIndex(20).getAsNumber() + (-90 - runtimeScene.getScene().getVariables().getFromIndex(20).getAsNumber()) * gdjs.RECode.localVariables[1].getFromIndex(0).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber() + (0 - runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber()) * gdjs.RECode.localVariables[1].getFromIndex(0).getAsNumber());
}
elseEventsChainSatisfied = true;
}
gdjs.RECode.localVariables.pop();

}


{


if (!elseEventsChainSatisfied) {
{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("k2", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("e2", variable);
}
gdjs.RECode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber() < 4);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{gdjs.RECode.localVariables[1].getFromIndex(0).setNumber((gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber() - 2) / 2);
}
{gdjs.RECode.localVariables[1].getFromIndex(1).setNumber(gdjs.RECode.localVariables[1].getFromIndex(0).getAsNumber() * gdjs.RECode.localVariables[1].getFromIndex(0).getAsNumber() * (3 - 2 * gdjs.RECode.localVariables[1].getFromIndex(0).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber() + (runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber()) * gdjs.RECode.localVariables[1].getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(55);
}
{runtimeScene.getScene().getVariables().getFromIndex(31).setNumber(120);
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(-90 + 90 * gdjs.RECode.localVariables[1].getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(0);
}
elseEventsChainSatisfied = true;
}
gdjs.RECode.localVariables.pop();
}

}


{


if (!elseEventsChainSatisfied) {
{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("k3", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("e3", variable);
}
gdjs.RECode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber() < 7);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{gdjs.RECode.localVariables[1].getFromIndex(0).setNumber((gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber() - 4) / 3);
}
{gdjs.RECode.localVariables[1].getFromIndex(1).setNumber(gdjs.RECode.localVariables[1].getFromIndex(0).getAsNumber() * gdjs.RECode.localVariables[1].getFromIndex(0).getAsNumber() * (3 - 2 * gdjs.RECode.localVariables[1].getFromIndex(0).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(55 + (-40 - 55) * gdjs.RECode.localVariables[1].getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(31).setNumber(120 + (118 - 120) * gdjs.RECode.localVariables[1].getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(75 + (60 - 75) * gdjs.RECode.localVariables[1].getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(0);
}
elseEventsChainSatisfied = true;
}
gdjs.RECode.localVariables.pop();
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(-40);
}
{runtimeScene.getScene().getVariables().getFromIndex(31).setNumber(118);
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(60);
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(0);
}

{ //Subevents
gdjs.RECode.eventsList3(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.RECode.eventsList5 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setString("_");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{runtimeScene.getScene().getVariables().getFromIndex(7).setString(" ");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.RECode.eventsList6 = function(runtimeScene) {

};gdjs.RECode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ChairPart"), gdjs.RECode.GDChairPartObjects1);

for (gdjs.RECode.forEachIndex2 = 0;gdjs.RECode.forEachIndex2 < gdjs.RECode.GDChairPartObjects1.length;++gdjs.RECode.forEachIndex2) {
gdjs.RECode.GDChairPartObjects2.length = 0;


gdjs.RECode.forEachTemporary2 = gdjs.RECode.GDChairPartObjects1[gdjs.RECode.forEachIndex2];
gdjs.RECode.GDChairPartObjects2.push(gdjs.RECode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.RECode.GDChairPartObjects2.length ;i < len;++i) {
    gdjs.RECode.GDChairPartObjects2[i].setX(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + gdjs.RECode.GDChairPartObjects2[i].getVariables().getFromIndex(1).getAsNumber() * Math.cos(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber())) - gdjs.RECode.GDChairPartObjects2[i].getVariables().getFromIndex(0).getAsNumber() * Math.sin(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber())) - ((gdjs.RECode.GDChairPartObjects2[i].getWidth()) / 2 * Math.cos(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber())) - (gdjs.RECode.GDChairPartObjects2[i].getHeight()) / 2 * Math.sin(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber()))));
}
}
{for(var i = 0, len = gdjs.RECode.GDChairPartObjects2.length ;i < len;++i) {
    gdjs.RECode.GDChairPartObjects2[i].setY(55 + gdjs.RECode.GDChairPartObjects2[i].getVariables().getFromIndex(1).getAsNumber() * Math.sin(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber())) + gdjs.RECode.GDChairPartObjects2[i].getVariables().getFromIndex(0).getAsNumber() * Math.cos(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber())) - ((gdjs.RECode.GDChairPartObjects2[i].getWidth()) / 2 * Math.sin(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber())) + (gdjs.RECode.GDChairPartObjects2[i].getHeight()) / 2 * Math.cos(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber()))));
}
}
{for(var i = 0, len = gdjs.RECode.GDChairPartObjects2.length ;i < len;++i) {
    gdjs.RECode.GDChairPartObjects2[i].setAngle(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}
}
}

}


};gdjs.RECode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber());
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Click_03.aac", false, 30, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber());
}
}

}


};gdjs.RECode.eventsList9 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() + 85);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() + 85);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - 85);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - 85);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TermPanel"), gdjs.RECode.GDTermPanelObjects2);
gdjs.copyArray(runtimeScene.getObjects("TermText"), gdjs.RECode.GDTermTextObjects2);
{gdjs.RECode.localVariables[0].getFromIndex(1).setNumber(Math.min(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "driftTimer"), 8) / 8);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(-7 * gdjs.RECode.localVariables[0].getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(-6 * gdjs.RECode.localVariables[0].getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(-40);
}
{runtimeScene.getScene().getVariables().getFromIndex(31).setNumber(118);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(0);
}
{for(var i = 0, len = gdjs.RECode.GDTermPanelObjects2.length ;i < len;++i) {
    gdjs.RECode.GDTermPanelObjects2[i].setX(260 - Math.tan(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber())) * 1663);
}
}
{for(var i = 0, len = gdjs.RECode.GDTermTextObjects2.length ;i < len;++i) {
    gdjs.RECode.GDTermTextObjects2[i].setX(330 - Math.tan(gdjs.toRad(runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber())) * 1663);
}
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber()) > 32);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(true);
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.abs(runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber()) < 6);
}
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Jumpscare1"), gdjs.RECode.GDJumpscare1Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("scare1");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scareTimer");
}
{for(var i = 0, len = gdjs.RECode.GDJumpscare1Objects1.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare1Objects1[i].hide(false);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Scream 4.aac", false, 100, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.RECode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scareTimer") < 0.4;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + gdjs.randomInRange(-8, 8));
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() + gdjs.randomInRange(-3, 3));
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(gdjs.randomInRange(-2, 2));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scareTimer") >= 1.0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Jumpscare1"), gdjs.RECode.GDJumpscare1Objects1);
gdjs.copyArray(runtimeScene.getObjects("TermPanel"), gdjs.RECode.GDTermPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("TermText"), gdjs.RECode.GDTermTextObjects1);
{for(var i = 0, len = gdjs.RECode.GDJumpscare1Objects1.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare1Objects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(-40);
}
{runtimeScene.getScene().getVariables().getFromIndex(31).setNumber(118);
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(-6);
}
{for(var i = 0, len = gdjs.RECode.GDTermPanelObjects1.length ;i < len;++i) {
    gdjs.RECode.GDTermPanelObjects1[i].setX(260);
}
}
{for(var i = 0, len = gdjs.RECode.GDTermTextObjects1.length ;i < len;++i) {
    gdjs.RECode.GDTermTextObjects1[i].setX(330);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("type3");
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("r u scared");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typeTimer");
}
}

}


};gdjs.RECode.mapOfGDgdjs_9546RECode_9546GDBtnYesObjects2Objects = Hashtable.newFrom({"BtnYes": gdjs.RECode.GDBtnYesObjects2});
gdjs.RECode.mapOfGDgdjs_9546RECode_9546GDBtnNoObjects2Objects = Hashtable.newFrom({"BtnNo": gdjs.RECode.GDBtnNoObjects2});
gdjs.RECode.mapOfGDgdjs_9546RECode_9546GDBtnYesObjects2Objects = Hashtable.newFrom({"BtnYes": gdjs.RECode.GDBtnYesObjects2});
gdjs.RECode.mapOfGDgdjs_9546RECode_9546GDBtnNoObjects1Objects = Hashtable.newFrom({"BtnNo": gdjs.RECode.GDBtnNoObjects1});
gdjs.RECode.eventsList11 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("BtnYes"), gdjs.RECode.GDBtnYesObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RECode.mapOfGDgdjs_9546RECode_9546GDBtnYesObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.RECode.GDBtnYesObjects2 */
{for(var i = 0, len = gdjs.RECode.GDBtnYesObjects2.length ;i < len;++i) {
    gdjs.RECode.GDBtnYesObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("BtnYes"), gdjs.RECode.GDBtnYesObjects2);
{for(var i = 0, len = gdjs.RECode.GDBtnYesObjects2.length ;i < len;++i) {
    gdjs.RECode.GDBtnYesObjects2[i].getBehavior("Opacity").setOpacity(150);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnNo"), gdjs.RECode.GDBtnNoObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RECode.mapOfGDgdjs_9546RECode_9546GDBtnNoObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.RECode.GDBtnNoObjects2 */
{for(var i = 0, len = gdjs.RECode.GDBtnNoObjects2.length ;i < len;++i) {
    gdjs.RECode.GDBtnNoObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("BtnNo"), gdjs.RECode.GDBtnNoObjects2);
{for(var i = 0, len = gdjs.RECode.GDBtnNoObjects2.length ;i < len;++i) {
    gdjs.RECode.GDBtnNoObjects2[i].getBehavior("Opacity").setOpacity(150);
}
}
elseEventsChainSatisfied = true;
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnYes"), gdjs.RECode.GDBtnYesObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RECode.mapOfGDgdjs_9546RECode_9546GDBtnYesObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnNo"), gdjs.RECode.GDBtnNoObjects2);
/* Reuse gdjs.RECode.GDBtnYesObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("answered");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("> YES");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "answerTimer");
}
{for(var i = 0, len = gdjs.RECode.GDBtnYesObjects2.length ;i < len;++i) {
    gdjs.RECode.GDBtnYesObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.RECode.GDBtnNoObjects2.length ;i < len;++i) {
    gdjs.RECode.GDBtnNoObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BtnNo"), gdjs.RECode.GDBtnNoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.RECode.mapOfGDgdjs_9546RECode_9546GDBtnNoObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.RECode.GDBtnNoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("BtnYes"), gdjs.RECode.GDBtnYesObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("answered");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("> NO");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "answerTimer");
}
{for(var i = 0, len = gdjs.RECode.GDBtnYesObjects1.length ;i < len;++i) {
    gdjs.RECode.GDBtnYesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.RECode.GDBtnNoObjects1.length ;i < len;++i) {
    gdjs.RECode.GDBtnNoObjects1[i].hide();
}
}
}

}

}

};gdjs.RECode.eventsList12 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Jumpscare2"), gdjs.RECode.GDJumpscare2Objects2);
{for(var i = 0, len = gdjs.RECode.GDJumpscare2Objects2.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare2Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.RECode.GDJumpscare2Objects2.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare2Objects2[i].setColor("255;255;255");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Scream 5.aac", false, 100, 1);
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (!elseEventsChainSatisfied && isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Jumpscare3"), gdjs.RECode.GDJumpscare3Objects2);
{for(var i = 0, len = gdjs.RECode.GDJumpscare3Objects2.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare3Objects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.RECode.GDJumpscare3Objects2.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare3Objects2[i].setColor("255;255;255");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Scream 3.aac", false, 100, 1);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Hard_Jump_Land_02.wav", false, 90, 1);
}
elseEventsChainSatisfied = true;
}
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("Jumpscare4"), gdjs.RECode.GDJumpscare4Objects1);
{for(var i = 0, len = gdjs.RECode.GDJumpscare4Objects1.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare4Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.RECode.GDJumpscare4Objects1.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare4Objects1[i].setColor("255;255;255");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Scream 4.aac", false, 100, 0.85);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_02.aac", false, 85, 1);
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.RECode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "answerTimer") > 0.5;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("scare2");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scareTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber());
}

{ //Subevents
gdjs.RECode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.RECode.eventsList14 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("do u want to leave");
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("can u hear it too");
}
elseEventsChainSatisfied = true;
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typeTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("type3");
}
}

}

}

};gdjs.RECode.eventsList15 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() < 3);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}

{ //Subevents
gdjs.RECode.eventsList14(runtimeScene);} //End of subevents
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("BtnNo"), gdjs.RECode.GDBtnNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnYes"), gdjs.RECode.GDBtnYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Eyelids"), gdjs.RECode.GDEyelidsObjects1);
gdjs.copyArray(runtimeScene.getObjects("TermPanel"), gdjs.RECode.GDTermPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("TermText"), gdjs.RECode.GDTermTextObjects1);
{for(var i = 0, len = gdjs.RECode.GDEyelidsObjects1.length ;i < len;++i) {
    gdjs.RECode.GDEyelidsObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.RECode.GDTermPanelObjects1.length ;i < len;++i) {
    gdjs.RECode.GDTermPanelObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.RECode.GDTermTextObjects1.length ;i < len;++i) {
    gdjs.RECode.GDTermTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.RECode.GDBtnYesObjects1.length ;i < len;++i) {
    gdjs.RECode.GDBtnYesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.RECode.GDBtnNoObjects1.length ;i < len;++i) {
    gdjs.RECode.GDBtnNoObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "eyesTimer");
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("eyes");
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.RECode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scareTimer") < 0.4;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + gdjs.randomInRange(-8, 8));
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(gdjs.randomInRange(-3, 3));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scareTimer") >= 1.2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Jumpscare2"), gdjs.RECode.GDJumpscare2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Jumpscare3"), gdjs.RECode.GDJumpscare3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Jumpscare4"), gdjs.RECode.GDJumpscare4Objects1);
{for(var i = 0, len = gdjs.RECode.GDJumpscare2Objects1.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.RECode.GDJumpscare3Objects1.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.RECode.GDJumpscare4Objects1.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare4Objects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(-40);
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(0);
}

{ //Subevents
gdjs.RECode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.RECode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber() >= 5);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("closed");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "closedTimer");
}
}

}


};gdjs.RECode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scareTimer") < 0.45;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + gdjs.randomInRange(-14, 14));
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(-40 + gdjs.randomInRange(-10, 10));
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(gdjs.randomInRange(-5, 5));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scareTimer") >= 1.2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Jumpscare5"), gdjs.RECode.GDJumpscare5Objects1);
{for(var i = 0, len = gdjs.RECode.GDJumpscare5Objects1.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare5Objects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(-40);
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("restart");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "restartTimer");
}
}

}


};gdjs.RECode.eventsList19 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CeilingLight"), gdjs.RECode.GDCeilingLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.RECode.GDPromptTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(170);
}
{runtimeScene.getScene().getVariables().getFromIndex(31).setNumber(165);
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(-10);
}
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(24).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(90);
}
{for(var i = 0, len = gdjs.RECode.GDPromptTextObjects1.length ;i < len;++i) {
    gdjs.RECode.GDPromptTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.RECode.GDCeilingLightObjects1.length ;i < len;++i) {
    gdjs.RECode.GDCeilingLightObjects1[i].hide();
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Alien Spaceship Atmosphere.aac", 1, true, 26, 1);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Bit Bit Loop.aac", 2, true, 8, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(24).getAsBoolean();
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__MousePointerLock__RequestPointerLock.func(runtimeScene, null);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(24).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(30).sub(gdjs.evtsExt__MousePointerLock__MovementX.func(runtimeScene, null) * 0.16);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).sub(gdjs.evtsExt__MousePointerLock__MovementY.func(runtimeScene, null) * 0.16);
}

{ //Subevents
gdjs.RECode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(24).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(26).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(0);
}

{ //Subevents
gdjs.RECode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(24).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.RECode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(24).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (Math.sqrt((runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber()) * (runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber()) + (runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber() - 55) * (runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber() - 55)) < 150);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "e");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PromptText"), gdjs.RECode.GDPromptTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(24).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("sit");
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber());
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "blinkTimer");
}
{for(var i = 0, len = gdjs.RECode.GDPromptTextObjects1.length ;i < len;++i) {
    gdjs.RECode.GDPromptTextObjects1[i].hide();
}
}
{gdjs.evtsExt__MousePointerLock__ExitPointerLock.func(runtimeScene, null);
}
{runtimeScene.getScene().getVariables().getFromIndex(23).setNumber(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(22).setNumber(runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber(runtimeScene.getScene().getVariables().getFromIndex(31).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setNumber(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "sitTimer");
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("t", variable);
}
gdjs.RECode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "sit");
}
if (isConditionTrue_0) {
{gdjs.RECode.localVariables[0].getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "sitTimer"));
}

{ //Subevents
gdjs.RECode.eventsList4(runtimeScene);} //End of subevents
}
gdjs.RECode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "blinkTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "blinkTimer") > 0.5;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "blinkTimer");
}
{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(8));
}

{ //Subevents
gdjs.RECode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber(), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber(), "", 0);
}
{gdjs.scene3d.camera.setCameraZ(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(31).getAsNumber(), "", 0);
}
{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber(), "", 0);
}
{gdjs.scene3d.camera.setCameraRotationY(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber(), "", 0);
}
{gdjs.scene3d.camera.setFov(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber(), "", 0);
}

{ //Subevents
gdjs.RECode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "type1");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "type2");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "type3");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "choose");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "wait1");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TermText"), gdjs.RECode.GDTermTextObjects1);
{/* Mismatched object type - skipped. */}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(Math.min(gdjs.evtTools.string.strLen(runtimeScene.getScene().getVariables().getFromIndex(11).getAsString()), Math.floor(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "typeTimer") / 0.05)));
}
{for(var i = 0, len = gdjs.RECode.GDTermTextObjects1.length ;i < len;++i) {
    gdjs.RECode.GDTermTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.subStr(runtimeScene.getScene().getVariables().getFromIndex(11).getAsString(), 0, runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()) + runtimeScene.getScene().getVariables().getFromIndex(7).getAsString());
}
}

{ //Subevents
gdjs.RECode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "type1");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() >= gdjs.evtTools.string.strLen(runtimeScene.getScene().getVariables().getFromIndex(11).getAsString()));
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("wait1");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "waitTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "wait1");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "waitTimer") > 3;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("type2");
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setString("but now that u are.... turn around");
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "typeTimer");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "type2");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() >= gdjs.evtTools.string.strLen(runtimeScene.getScene().getVariables().getFromIndex(11).getAsString()));
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("look");
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setBoolean(false);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0));
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "driftTimer");
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("dx", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("dr", variable);
}
gdjs.RECode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "look");
}
if (isConditionTrue_0) {
{gdjs.RECode.localVariables[0].getFromIndex(0).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getCursorX(runtimeScene, "UI", 0));
}
{runtimeScene.getScene().getVariables().getFromIndex(30).sub(gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber() * 0.14);
}

{ //Subevents
gdjs.RECode.eventsList9(runtimeScene);} //End of subevents
}
gdjs.RECode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "scare1");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.RECode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "type3");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() >= gdjs.evtTools.string.strLen(runtimeScene.getScene().getVariables().getFromIndex(11).getAsString()));
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BtnNo"), gdjs.RECode.GDBtnNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnYes"), gdjs.RECode.GDBtnYesObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("choose");
}
{for(var i = 0, len = gdjs.RECode.GDBtnYesObjects1.length ;i < len;++i) {
    gdjs.RECode.GDBtnYesObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.RECode.GDBtnNoObjects1.length ;i < len;++i) {
    gdjs.RECode.GDBtnNoObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "choose");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.RECode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "answered");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TermText"), gdjs.RECode.GDTermTextObjects1);
{for(var i = 0, len = gdjs.RECode.GDTermTextObjects1.length ;i < len;++i) {
    gdjs.RECode.GDTermTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(11).getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() + runtimeScene.getScene().getVariables().getFromIndex(7).getAsString());
}
}

{ //Subevents
gdjs.RECode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "scare2");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.RECode.eventsList16(runtimeScene);} //End of subevents
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("et", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("h", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("a1", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("a2", variable);
}
gdjs.RECode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "eyes");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Eyelids"), gdjs.RECode.GDEyelidsObjects1);
{gdjs.RECode.localVariables[0].getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "eyesTimer"));
}
{gdjs.RECode.localVariables[0].getFromIndex(1).setNumber(540 * (1 - Math.pow(gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber() / 5, 1.5)));
}
{gdjs.RECode.localVariables[0].getFromIndex(2).setNumber(45 * Math.min(gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber(), 1));
}
{gdjs.RECode.localVariables[0].getFromIndex(3).setNumber(210 * Math.min(1, Math.max(0, (gdjs.RECode.localVariables[0].getFromIndex(0).getAsNumber() - 4.4) / 0.6)));
}
{for(var i = 0, len = gdjs.RECode.GDEyelidsObjects1.length ;i < len;++i) {
    gdjs.RECode.GDEyelidsObjects1[i].setFillColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.RECode.GDEyelidsObjects1.length ;i < len;++i) {
    gdjs.RECode.GDEyelidsObjects1[i].setFillOpacity(gdjs.RECode.localVariables[0].getFromIndex(2).getAsNumber() + gdjs.RECode.localVariables[0].getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.RECode.GDEyelidsObjects1.length ;i < len;++i) {
    gdjs.RECode.GDEyelidsObjects1[i].drawRectangle(0, 0, 1920, 1080);
}
}
{for(var i = 0, len = gdjs.RECode.GDEyelidsObjects1.length ;i < len;++i) {
    gdjs.RECode.GDEyelidsObjects1[i].setFillOpacity(255);
}
}
{for(var i = 0, len = gdjs.RECode.GDEyelidsObjects1.length ;i < len;++i) {
    gdjs.RECode.GDEyelidsObjects1[i].drawEllipse(960, 540 - gdjs.RECode.localVariables[0].getFromIndex(1).getAsNumber() - 4000, 13600, 8000);
}
}
{for(var i = 0, len = gdjs.RECode.GDEyelidsObjects1.length ;i < len;++i) {
    gdjs.RECode.GDEyelidsObjects1[i].drawEllipse(960, 540 + gdjs.RECode.localVariables[0].getFromIndex(1).getAsNumber() + 4000, 13600, 8000);
}
}

{ //Subevents
gdjs.RECode.eventsList17(runtimeScene);} //End of subevents
}
gdjs.RECode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "closed");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "scare3");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "restart");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Eyelids"), gdjs.RECode.GDEyelidsObjects1);
{for(var i = 0, len = gdjs.RECode.GDEyelidsObjects1.length ;i < len;++i) {
    gdjs.RECode.GDEyelidsObjects1[i].setFillColor("0;0;0");
}
}
{for(var i = 0, len = gdjs.RECode.GDEyelidsObjects1.length ;i < len;++i) {
    gdjs.RECode.GDEyelidsObjects1[i].setFillOpacity(255);
}
}
{for(var i = 0, len = gdjs.RECode.GDEyelidsObjects1.length ;i < len;++i) {
    gdjs.RECode.GDEyelidsObjects1[i].drawRectangle(0, 0, 1920, 1080);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "closed");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "closedTimer") > 0.5;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Jumpscare5"), gdjs.RECode.GDJumpscare5Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(12).setString("scare3");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scareTimer");
}
{for(var i = 0, len = gdjs.RECode.GDJumpscare5Objects1.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare5Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.RECode.GDJumpscare5Objects1.length ;i < len;++i) {
    gdjs.RECode.GDJumpscare5Objects1[i].setColor("255;255;255");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Scream 3.aac", false, 100, 0.75);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Hard_Jump_Land_02.wav", false, 100, 0.8);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "scare3");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.RECode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "restart");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "restartTimer") > 0.8;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RestartText"), gdjs.RECode.GDRestartTextObjects1);
{for(var i = 0, len = gdjs.RECode.GDRestartTextObjects1.length ;i < len;++i) {
    gdjs.RECode.GDRestartTextObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "type1");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11551508);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Data_Point_02.aac", false, 55, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "sit");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "sitTimer") > 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9865332);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Engine Will Not Start.aac", false, 12, 1.8);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "eyes");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9911484);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 1, 0, 3);
}
{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 3);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Extreme Darkness.aac", 3, true, 10, 1);
}
}

}


{


elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "type1");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "wait1");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "type2");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "look");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "type3");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "choose");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsString() == "answered");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TermPanel"), gdjs.RECode.GDTermPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("TermText"), gdjs.RECode.GDTermTextObjects1);
{for(var i = 0, len = gdjs.RECode.GDTermPanelObjects1.length ;i < len;++i) {
    gdjs.RECode.GDTermPanelObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.RECode.GDTermTextObjects1.length ;i < len;++i) {
    gdjs.RECode.GDTermTextObjects1[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}

}


{


if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
if (!elseEventsChainSatisfied) {
gdjs.copyArray(runtimeScene.getObjects("BtnNo"), gdjs.RECode.GDBtnNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("BtnYes"), gdjs.RECode.GDBtnYesObjects1);
gdjs.copyArray(runtimeScene.getObjects("TermPanel"), gdjs.RECode.GDTermPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("TermText"), gdjs.RECode.GDTermTextObjects1);
{for(var i = 0, len = gdjs.RECode.GDTermPanelObjects1.length ;i < len;++i) {
    gdjs.RECode.GDTermPanelObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.RECode.GDTermTextObjects1.length ;i < len;++i) {
    gdjs.RECode.GDTermTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.RECode.GDBtnYesObjects1.length ;i < len;++i) {
    gdjs.RECode.GDBtnYesObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.RECode.GDBtnNoObjects1.length ;i < len;++i) {
    gdjs.RECode.GDBtnNoObjects1[i].hide();
}
}
elseEventsChainSatisfied = true;
}
}

}

}

};

gdjs.RECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RECode.GDWallObjects1.length = 0;
gdjs.RECode.GDWallObjects2.length = 0;
gdjs.RECode.GDWallObjects3.length = 0;
gdjs.RECode.GDWallObjects4.length = 0;
gdjs.RECode.GDFloorObjects1.length = 0;
gdjs.RECode.GDFloorObjects2.length = 0;
gdjs.RECode.GDFloorObjects3.length = 0;
gdjs.RECode.GDFloorObjects4.length = 0;
gdjs.RECode.GDCeilingObjects1.length = 0;
gdjs.RECode.GDCeilingObjects2.length = 0;
gdjs.RECode.GDCeilingObjects3.length = 0;
gdjs.RECode.GDCeilingObjects4.length = 0;
gdjs.RECode.GDCeilingLightObjects1.length = 0;
gdjs.RECode.GDCeilingLightObjects2.length = 0;
gdjs.RECode.GDCeilingLightObjects3.length = 0;
gdjs.RECode.GDCeilingLightObjects4.length = 0;
gdjs.RECode.GDPromptTextObjects1.length = 0;
gdjs.RECode.GDPromptTextObjects2.length = 0;
gdjs.RECode.GDPromptTextObjects3.length = 0;
gdjs.RECode.GDPromptTextObjects4.length = 0;
gdjs.RECode.GDFurnitureObjects1.length = 0;
gdjs.RECode.GDFurnitureObjects2.length = 0;
gdjs.RECode.GDFurnitureObjects3.length = 0;
gdjs.RECode.GDFurnitureObjects4.length = 0;
gdjs.RECode.GDChairPartObjects1.length = 0;
gdjs.RECode.GDChairPartObjects2.length = 0;
gdjs.RECode.GDChairPartObjects3.length = 0;
gdjs.RECode.GDChairPartObjects4.length = 0;
gdjs.RECode.GDTermPanelObjects1.length = 0;
gdjs.RECode.GDTermPanelObjects2.length = 0;
gdjs.RECode.GDTermPanelObjects3.length = 0;
gdjs.RECode.GDTermPanelObjects4.length = 0;
gdjs.RECode.GDTermTextObjects1.length = 0;
gdjs.RECode.GDTermTextObjects2.length = 0;
gdjs.RECode.GDTermTextObjects3.length = 0;
gdjs.RECode.GDTermTextObjects4.length = 0;
gdjs.RECode.GDBtnYesObjects1.length = 0;
gdjs.RECode.GDBtnYesObjects2.length = 0;
gdjs.RECode.GDBtnYesObjects3.length = 0;
gdjs.RECode.GDBtnYesObjects4.length = 0;
gdjs.RECode.GDBtnNoObjects1.length = 0;
gdjs.RECode.GDBtnNoObjects2.length = 0;
gdjs.RECode.GDBtnNoObjects3.length = 0;
gdjs.RECode.GDBtnNoObjects4.length = 0;
gdjs.RECode.GDJumpscare1Objects1.length = 0;
gdjs.RECode.GDJumpscare1Objects2.length = 0;
gdjs.RECode.GDJumpscare1Objects3.length = 0;
gdjs.RECode.GDJumpscare1Objects4.length = 0;
gdjs.RECode.GDJumpscare2Objects1.length = 0;
gdjs.RECode.GDJumpscare2Objects2.length = 0;
gdjs.RECode.GDJumpscare2Objects3.length = 0;
gdjs.RECode.GDJumpscare2Objects4.length = 0;
gdjs.RECode.GDJumpscare3Objects1.length = 0;
gdjs.RECode.GDJumpscare3Objects2.length = 0;
gdjs.RECode.GDJumpscare3Objects3.length = 0;
gdjs.RECode.GDJumpscare3Objects4.length = 0;
gdjs.RECode.GDEyelidsObjects1.length = 0;
gdjs.RECode.GDEyelidsObjects2.length = 0;
gdjs.RECode.GDEyelidsObjects3.length = 0;
gdjs.RECode.GDEyelidsObjects4.length = 0;
gdjs.RECode.GDRestartTextObjects1.length = 0;
gdjs.RECode.GDRestartTextObjects2.length = 0;
gdjs.RECode.GDRestartTextObjects3.length = 0;
gdjs.RECode.GDRestartTextObjects4.length = 0;
gdjs.RECode.GDJumpscare4Objects1.length = 0;
gdjs.RECode.GDJumpscare4Objects2.length = 0;
gdjs.RECode.GDJumpscare4Objects3.length = 0;
gdjs.RECode.GDJumpscare4Objects4.length = 0;
gdjs.RECode.GDJumpscare5Objects1.length = 0;
gdjs.RECode.GDJumpscare5Objects2.length = 0;
gdjs.RECode.GDJumpscare5Objects3.length = 0;
gdjs.RECode.GDJumpscare5Objects4.length = 0;

gdjs.RECode.eventsList19(runtimeScene);
gdjs.RECode.GDWallObjects1.length = 0;
gdjs.RECode.GDWallObjects2.length = 0;
gdjs.RECode.GDWallObjects3.length = 0;
gdjs.RECode.GDWallObjects4.length = 0;
gdjs.RECode.GDFloorObjects1.length = 0;
gdjs.RECode.GDFloorObjects2.length = 0;
gdjs.RECode.GDFloorObjects3.length = 0;
gdjs.RECode.GDFloorObjects4.length = 0;
gdjs.RECode.GDCeilingObjects1.length = 0;
gdjs.RECode.GDCeilingObjects2.length = 0;
gdjs.RECode.GDCeilingObjects3.length = 0;
gdjs.RECode.GDCeilingObjects4.length = 0;
gdjs.RECode.GDCeilingLightObjects1.length = 0;
gdjs.RECode.GDCeilingLightObjects2.length = 0;
gdjs.RECode.GDCeilingLightObjects3.length = 0;
gdjs.RECode.GDCeilingLightObjects4.length = 0;
gdjs.RECode.GDPromptTextObjects1.length = 0;
gdjs.RECode.GDPromptTextObjects2.length = 0;
gdjs.RECode.GDPromptTextObjects3.length = 0;
gdjs.RECode.GDPromptTextObjects4.length = 0;
gdjs.RECode.GDFurnitureObjects1.length = 0;
gdjs.RECode.GDFurnitureObjects2.length = 0;
gdjs.RECode.GDFurnitureObjects3.length = 0;
gdjs.RECode.GDFurnitureObjects4.length = 0;
gdjs.RECode.GDChairPartObjects1.length = 0;
gdjs.RECode.GDChairPartObjects2.length = 0;
gdjs.RECode.GDChairPartObjects3.length = 0;
gdjs.RECode.GDChairPartObjects4.length = 0;
gdjs.RECode.GDTermPanelObjects1.length = 0;
gdjs.RECode.GDTermPanelObjects2.length = 0;
gdjs.RECode.GDTermPanelObjects3.length = 0;
gdjs.RECode.GDTermPanelObjects4.length = 0;
gdjs.RECode.GDTermTextObjects1.length = 0;
gdjs.RECode.GDTermTextObjects2.length = 0;
gdjs.RECode.GDTermTextObjects3.length = 0;
gdjs.RECode.GDTermTextObjects4.length = 0;
gdjs.RECode.GDBtnYesObjects1.length = 0;
gdjs.RECode.GDBtnYesObjects2.length = 0;
gdjs.RECode.GDBtnYesObjects3.length = 0;
gdjs.RECode.GDBtnYesObjects4.length = 0;
gdjs.RECode.GDBtnNoObjects1.length = 0;
gdjs.RECode.GDBtnNoObjects2.length = 0;
gdjs.RECode.GDBtnNoObjects3.length = 0;
gdjs.RECode.GDBtnNoObjects4.length = 0;
gdjs.RECode.GDJumpscare1Objects1.length = 0;
gdjs.RECode.GDJumpscare1Objects2.length = 0;
gdjs.RECode.GDJumpscare1Objects3.length = 0;
gdjs.RECode.GDJumpscare1Objects4.length = 0;
gdjs.RECode.GDJumpscare2Objects1.length = 0;
gdjs.RECode.GDJumpscare2Objects2.length = 0;
gdjs.RECode.GDJumpscare2Objects3.length = 0;
gdjs.RECode.GDJumpscare2Objects4.length = 0;
gdjs.RECode.GDJumpscare3Objects1.length = 0;
gdjs.RECode.GDJumpscare3Objects2.length = 0;
gdjs.RECode.GDJumpscare3Objects3.length = 0;
gdjs.RECode.GDJumpscare3Objects4.length = 0;
gdjs.RECode.GDEyelidsObjects1.length = 0;
gdjs.RECode.GDEyelidsObjects2.length = 0;
gdjs.RECode.GDEyelidsObjects3.length = 0;
gdjs.RECode.GDEyelidsObjects4.length = 0;
gdjs.RECode.GDRestartTextObjects1.length = 0;
gdjs.RECode.GDRestartTextObjects2.length = 0;
gdjs.RECode.GDRestartTextObjects3.length = 0;
gdjs.RECode.GDRestartTextObjects4.length = 0;
gdjs.RECode.GDJumpscare4Objects1.length = 0;
gdjs.RECode.GDJumpscare4Objects2.length = 0;
gdjs.RECode.GDJumpscare4Objects3.length = 0;
gdjs.RECode.GDJumpscare4Objects4.length = 0;
gdjs.RECode.GDJumpscare5Objects1.length = 0;
gdjs.RECode.GDJumpscare5Objects2.length = 0;
gdjs.RECode.GDJumpscare5Objects3.length = 0;
gdjs.RECode.GDJumpscare5Objects4.length = 0;


return;

}

gdjs['RECode'] = gdjs.RECode;
