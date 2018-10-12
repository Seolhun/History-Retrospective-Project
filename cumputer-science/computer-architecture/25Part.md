# Translation Lookaside Buffer(TLB) (25Part)

## Goal
아래와 같은 사항들을 개선하기 위하여 TLB가 존재

- Double memory accesses in virtual memory 
	1. to obtain the physical address (i.e. to read page table) 
	2. to get the data
- TLB (translation-lookaside buffer)
	- Using locality of reference to the page table
	- A cache that keeps track of recently used address mappings to try to avoid an access to the page table

##### References		
- Computer Architecture 25-2

#### Integrating Virtual Memory, TLBs, and Caches
Cache > TLB > virtual memory 순서로 Cases 정리

##### References		
- Computer Architecture 25-4