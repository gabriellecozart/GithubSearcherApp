import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';
import { USER_LIST } from '../../mocks/user.mocks';
import { REPOSITORY_LIST } from '../../mocks/repository.mocks';

/**
 * Generated class for the ProfileSearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-search-results',
  templateUrl: 'profile-search-results.html',
})
export class ProfileSearchResultsPage {
  username: string;

  repositories: Repository[] = REPOSITORY_LIST;
  user: User = USER_LIST[0];



  constructor(private loading: LoadingController, private navCtrl: NavController, private navParams: NavParams, private githubService: GithubServiceProvider) {
  }

  getMockRepositoryInformation(): void {
    this.githubService.mockGetRepositories(this.username).subscribe(data => {
      this.repositories = data;
    }, (error) => {
      console.error(error);
    })
  }

  getMockUserInformation(): void {
    this.githubService.mockGetUserInformation(this.username).subscribe((userData: User) => {
      this.user = userData;
    }, (error) => {
      console.error(error);
    });
  }

  showLoading() {
    let loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    return loader;
  }

  dismissLoading(loader: Loading){
    loader.dismiss();
  }

  getUserInformation(): void {
    let loader = this.showLoading();
    this.githubService.getUserInformation(this.username).subscribe(data => {
      this.user = data;
    });
    this.githubService.getRepositoryInformation(this.username).subscribe(data => {              this.repositories = data;
    });
    this.dismissLoading(loader);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    this.getUserInformation();
    console.log(this.user);
    console.log(this.repositories);
  }

}
