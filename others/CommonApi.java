package com.exampleapp;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.List;

/**
 * @author will
 * @Description
 * @date 2017/6/14 下午4:10
 */
public class CommonApi extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;
    private final static String CUSTOM_PUSH_TOKEN = "PushToken";
    private final static String CUSTOM_PUSH_BODY = "PushBody";

    public CommonApi(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    public static ReactApplicationContext getReactContext() {
        return reactContext;
    }

    @Override
    public String getName() {
        return "CustomApi";
    }

    /**
     * 拨打电话
     *
     * @param telephone
     */
    @ReactMethod
    public void call(String telephone) {
        Intent phoneIntent =
                new Intent("android.intent.action.CALL", Uri.parse("tel:" + telephone));
        phoneIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactContext.startActivity(phoneIntent);
    }


    /**
     * 启动微信
     */
    @ReactMethod
    public void loadWechat() {
        if (isWeixinAvilible(reactContext)) {
            Intent intent = new Intent();
            ComponentName cmp = new ComponentName("com.tencent.mm", "com.tencent.mm.ui.LauncherUI");
            intent.setAction(Intent.ACTION_MAIN);
            intent.addCategory(Intent.CATEGORY_LAUNCHER);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.setComponent(cmp);
            reactContext.startActivity(intent);
        } else {
            Toast.makeText(reactContext, "未安装微信", Toast.LENGTH_SHORT).show();
        }
    }

    @ReactMethod
    public void exitApp(){
        Intent intent= new Intent(Intent.ACTION_MAIN);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.addCategory(Intent.CATEGORY_HOME);
        reactContext.startActivity(intent);
    }

    /**
     * 判断微信是否安装
     *
     * @param context
     */
    public static boolean isWeixinAvilible(Context context) {
        final PackageManager packageManager = context.getPackageManager();// 获取packagemanager
        List<PackageInfo> pinfo = packageManager.getInstalledPackages(0);// 获取所有已安装程序的包信息
        if (pinfo != null) {
            for (int i = 0; i < pinfo.size(); i++) {
                String pn = pinfo.get(i).packageName;
                if(pn.equals("com.tencent.mm")){
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * 给rn发送event
     *
     * @param eventName
     * @param body
     */
    public static void sendEvent(String eventName, WritableMap body) {
        getReactContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, body);
    }

    /**
     * 给rn发送event
     *
     * @param eventName
     * @param body
     */
    public static void sendEvent(String eventName, String body) {
        getReactContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, body);
    }

    /**
     * 向RN发送推送token
     * @param pushToken
     */
    public static void sendPushToken(String pushToken){
        sendEvent(CUSTOM_PUSH_TOKEN,pushToken);
    }

    /**
     * 向RN发送推送内容
     * @param pushBody
     */
    public static void sendPushBody(String pushBody){
        sendEvent(CUSTOM_PUSH_BODY,pushBody);
    }

}
