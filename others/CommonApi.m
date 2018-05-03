//
//  CommonApi.m
//  TestProject
//
//  Created by SmartRabbit on 2017/6/15.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "CommonApi.h"


#define CUSTOM_PUSH_TOKEN @"PushToken"
#define CUSTOM_PUSH_BODY @"PushBody"

static CommonApi *_commonApi = nil;

@implementation CommonApi

@synthesize bridge=_bridge;
RCT_EXPORT_MODULE();

-(instancetype)init{
  self = [super init];
  if(self){
    _commonApi = self;
    
  }
  return self;
}
+ (BOOL)requiresMainQueueSetup
{
  return YES;
}
+ (CommonApi *) commonApi{
  return _commonApi;
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




RCT_EXPORT_METHOD(getHost:(RCTResponseSenderBlock)callback){
  NSString *url = @"";
#if DEBUG
  url = @"debugHost";

#else
  url = @"releaseHost";

#endif
  callback(@[url]);
}


- (NSArray<NSString *> *)supportedEvents
{
  return @[CUSTOM_PUSH_TOKEN,CUSTOM_PUSH_BODY];//有几个就写几个
}

/**
 测试
 给js发送消息
 */

-(void)test{
  [self sendEventWithName:CUSTOM_PUSH_TOKEN body:@{@"token":@"2455412efd"}];
}

@end
