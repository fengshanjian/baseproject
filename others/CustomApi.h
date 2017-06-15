//
//  CustomApi.h
//  TestProject
//
//  Created by SmartRabbit on 2017/6/15.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>
#import <React/RCTEventDispatcher.h>

@interface CustomApi : NSObject<RCTBridgeModule>

+ (CustomApi *) customApi;

- (void)sendEvent:(NSString *)name body:(id)body;

- (void)sendPushToken:(NSString *)pushToken;

- (void)sendPushBody:(NSDictionary *)pushBody;

@end
