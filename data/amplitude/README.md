# How to Use Amplitude

## How To install
- SDK

## How to get Data
- SDK
- Setting

## Content 
- Taxonomy

## Questions
1. Instance.NAME이란?
	- 어떤 것을 적어야되는것인지?
2. Amplitude API KEY
3. UserID와 SessionID의 차이
	- 이미 Email로 추적 중.	
4. Identifying
	- Group
	- DeviceID
	- ...
5. user 저장 이벤트 이름
6. 데이터 로그가 전송되었는지 확인하는 방법.
7. Tracking Configuration

## Determining Unique Users

- Device ID
	- We will pull the IDFV or generate a random alphanumeric string that ends with the letter 'R' for Device ID and is stored locally in the browser's cookie or mobile device. However, there is a flag that you can toggle to use the Identifier for Advertiser (IDFA for iOS) and the Advertising Identifier (AdID for Android) as the Device ID (see the relevant SDK installation guide for more information).

- User ID
	- This identifier is configured by you. Many products use a username or an internal unique identifier to track their users. To set a User ID, use the setUserId method outlined in our SDKs.

> IMPORTANT NOTE: If the User ID gets changed, then this would create a new user. We recommend not setting the User ID to something that may change (e.g. email address).


## Refs
- [Amplitude - Getting started](https://amplitude.zendesk.com/hc/en-us/categories/200409887-Getting-Started)
- [Amplitude - Javascript SDK](https://amplitude.zendesk.com/hc/en-us/articles/115001361248-JavaScript-SDK-Installation)
- [Amplitude - Tracking-Unique-Users](https://amplitude.zendesk.com/hc/en-us/articles/115003135607-Tracking-Unique-Users)
- [Amplitude - Tracking Configuration](https://amplitude.zendesk.com/hc/en-us/articles/115001361248-JavaScript-SDK-Installation#settings-configuration-options)
