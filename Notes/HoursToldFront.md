# 2017-01-05

## 21:00-21:43

- Setup Project

## 21:44-0:54

- Add Example App Code

# 2017-01-06

## 7:30-9:43

- Define State Type

## 10:15-11:12

- Convert StateData to State 

## 11:13-13:30
## 14:00-14:53

- Change to ElementFactory for Platforms

## 14:54-15:15

- Emit down tree

## 15:16-16:47

- Support Calculations with Auto Subscription

## 16:48-18:33

- Add Action with Button

## 18:34-19:00

- Write Task List

# Tasks

- Debug why Travis is failing, but local test is working

## Features


### State

- Support Dynamic Children in State Tree
	- Added Value (Where it didn't exist before - CREATE)
	- Null Value (Where id did exist before - REMOVE)
	- Array Length Changed (CREATE/REMOVE)

- ?Calculated Values in State


### Actions

- Action Targeting Nested Value
- Action Targeting Nested Value that is Replaced Higher in the Tree
- Action Targeting Array Items
- Action Unit Testing

### Arrays 

- Array Iteration in Markup
- Modifying Array Content with Actions
- Array Modification Changes only Single Items
