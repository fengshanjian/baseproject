//
//  CommonApi.h
//  TestProject
//
//  Created by SmartRabbit on 2017/6/15.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>
#import <React/RCTEventDispatcher.h>
#import <React/RCTEventEmitter.h>

@interface CommonApi : RCTEventEmitter<RCTBridgeModule>

+ (CommonApi *) commonApi;

//- (void)sendEvent:(NSString *)name body:(id)body;


@end
