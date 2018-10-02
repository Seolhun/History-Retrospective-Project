# Pipelining(14 Part)
- 병렬적으로 명령을 보내기 위해 사용하는 것

## Pipelining 
- Stages of Instruction Execution
	1. Fetch instruction.
	2. Read registers while decoding the instruction.
	3. Execute the operation or calculate an address.
	4. Access an operand in data memory.
	5. Write the result into a register.

##### References
- Computer Architecture 14-5 ~ 6

## Pipelining Hazards
􏰀1. Structural hazards
	- 같은 자원이 공유되서 사용될 경우
􏰀2. Data hazards
	- 이전의 값을 사용해야 할 경우, Forwarding( = bypassing) 해야 할 경우
􏰀3. Control hazards
	- fetch cannot continue because it does not know the outcome of an earlier branch