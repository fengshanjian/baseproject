//
//  CustomApi.m
//  TestProject
//
//  Created by SmartRabbit on 2017/6/15.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CustomApi.h"


#define CUSTOM_PUSH_TOKEN @"PushToken"
#define CUSTOM_PUSH_BODY @"PushBody"

static CustomApi *_customApi = nil;

@implementation CustomApi

@synthesize bridge=_bridge;
RCT_EXPORT_MODULE();

-(instancetype)init{
  self = [super init];
  if(self){
    _customApi = self;
  }
  return self;
}

+ (CustomApi *) customApi{
  return _customApi;
}


/**
 * 拨打电话
 */
RCT_EXPORT_METHOD(call:(NSString *)phone){
  
  dispatch_async(dispatch_get_main_queue(), ^{
    NSMutableString *phoneStr = [[NSMutableString alloc] initWithFormat:@"tel:%@",phone];
    NSURL *phoneUrl = [NSURL URLWithString:phoneStr];
    UIWebView *phoneWeb = [[UIWebView alloc] init];
    [phoneWeb loadRequest:[NSURLRequest requestWithURL:phoneUrl]];
    [[UIApplication sharedApplication].keyWindow addSubview:phoneWeb];
  });
}


/**
 * 打开微信
 */
RCT_EXPORT_METHOD(loadWechat){
  dispatch_async(dispatch_get_main_queue(), ^{
    NSURL *openUrl = [NSURL URLWithString:@"wechat://"];
    if ([[UIApplication sharedApplication] canOpenURL:openUrl]) {
      [[UIApplication sharedApplication] openURL:openUrl];
    }else{
      UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"温馨提示" message:@"请先安装微信" delegate:nil cancelButtonTitle:@"确定" otherButtonTitles: nil];
      [alert show];
    }
  });
}


/**
 * 使用方法[[CustomApi customApi] sendPushToken:@""];
 */
- (void)sendPushToken:(NSString *)pushToken{
  [self sendEvent:CUSTOM_PUSH_TOKEN body:pushToken];
}
/**
 * 使用方法[[CustomApi customApi] sendPushBody:];
 */
- (void)sendPushBody:(NSDictionary *)pushBody{
  [self sendEvent:CUSTOM_PUSH_BODY body:pushBody];
}

-(void)sendEvent:(NSString *)name body:(NSMutableDictionary *)body {
  [self.bridge.eventDispatcher sendAppEventWithName:name body:body];
}

@end
