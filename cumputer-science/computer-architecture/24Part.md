# Virtual Memory (24Part)

## Goal
Give the programmer the illusion that the system has a very large memory, even though the computer actually has a relatively small main memory

#### Address Mapping
Adress space (logical) and memory space (physical)

- Virtual addresses
	- Used by the processor (program, user)
- Physical addresses
	- Used to access main memory
- Page
	- Virtual memory block
- Page fault
	- Virtual memory miss

#### Address in Virtual Memory System
- Address = virtual page number || page offset

##### References
- Computer Architecture 24-7

#### Page table
- A full table that indexes the memory
- Contains the virtual to physical address translation - Resides in memory
- Each process has its own page table.
- Indexed with the virtual page number
- Page table entry (PTE)
	- Physical page number
	- Valid bit (or residence bit or presence bit)
- Page table register
	- Starting address of the page table

##### References		
- Computer Architecture 24-10

#### Page Fault
##### References		
- Computer Architecture 24-16


