# Pipelining(15 Part)

- 병렬적으로 명령을 보내기 위해 사용하는 것

## Control Signal

해당 요청의 결과를 어떻게 처리할지를 Signal 값으로 보낸다.

1. IF : nothing ( the same thing happens at every clock cycle)
2. ID : nothing
3. EX : RegDst, ALUOp, ALUSrc
4. MEM : Branch(for beq), MemRead(for lw), MemWrite(for sw)
5. WB : MemtoReg, RegWrite

##### References

- Computer Architecture 15-13

## Structural hazards

- Conflict for use of a resource
- In MIPS pipeline with a single memory
  - Load/store requires data access
  - Instruction fetch would have to stall for that cycle  Would cause a pipeline “bubble”
- Hence, pipelined datapaths require separate instruction/data memories

  - Or separate instruction/data caches

##### References

- Computer Architecture 15-17
