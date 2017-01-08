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

## 19:01-19:17

- Debug why Travis is failing, but local test is working

## 22:30-0:47

- Add action with input

## 0:48-1:22

- START Array

# 2017-01-07

## 9:00-10:12

- Finish Defining Array Expressions

## 20:00-22:10

- StateStorage

##

- Implement Arrays
- Cleanup Actions
- Cleanup State
- Cleanup Arrays


# Tasks


## Features


### State

- Support Dynamic Children in State Tree
	- Added Value (Where it didn't exist before - CREATE)
	- Null Value (Where id did exist before - REMOVE)
	- Array Length Changed (CREATE/REMOVE)

- ?Calculated Values in State


### Actions

- Log Actions
- Action Targeting Nested Value
- Action Targeting Nested Value that is Replaced Higher in the Tree
- Action Targeting Array Items
- Action Unit Testing

### Arrays 

- Array Iteration in Markup
- Modifying Array Content with Actions
- Array Modification Changes only Single Items


### State Persistence

- Persist State Changes 
	- Serialized Action Result
		- Absoulte State Tree Change Json
		- External Request/Response
		- Action Metadata
			- Version Number
			- ActionName
			- Target (StatePath)
			- Input
			- UserCredentials
				- Authorization
				- Access Point (Device, IP, etc.)
			- Time
- Reconstitute State @ Any Time
- State Changes can be reconstructed on Server
	- in proper order by time 
	- verify Credentials
	- use Action Metadata
		- Version Number
		- ActionName
		- Target
		- Input
	- compare to client-side results
	
### State Loading (Hot and Cold State)

- Hot State
	- State that has been reconstituted and is available on the client
- Cold State
	- State that is persisted in storage and must be requested
	- Loading is Automated
		- Loading Indicator at UI placeholder
		- Retry Button on load fail
	- Placeholders are in the correct structure of the tree
	- Paging Placeholders for Arrays

### State Versioning

- Upgrade/Downgrade state transformations
- Keep Supported Model Versions in runtime for server-side state execution 
- Support Mixed Client Versions?
	- Use State Transformations on State Changes
		

### Shared State

- Owner can create a State Tree
- Owner can grant view permissions at any branch
	- Include Branch
	- Exclude Branch
- Owner can grant action permissions at any branch
	- Allow Action at Node
	- Prevent Action at Node

#### Examples

##### Game Session

- Owner is Host
- Grants View Permission to All Players
- Create Branch for Each Player with Edit Permissions
- Grants Game Action Permissions to All Players

##### Slither.io type game

- Tree is Single Game Session (Entire World)
- Each Player can only run UpdateLocation and AteFood Actions
	- Append Location Update to multiple WorldSegmentBranches
		- WorldSegmentBranches are 2 screen size that overlap 1 screen
		- 4 Segments should be updated for each update
- Server Verifies UpdateLocation and AteFood validity
	- Or Verification could be distributed among clients

##### Preventing Game Cheating

- Don't share opponents moves with player until player commits own move at that time point 