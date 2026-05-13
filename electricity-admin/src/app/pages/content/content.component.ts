import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-content",
  imports: [ CommonModule],
  templateUrl: "./content.component.html",
  styleUrl: "./content.component.css",
})
export class ContentComponent {
  customers = [];

  isLoading = false;
  errorMessage = "";
  hasMoreData = true;
  private readonly PAGE_LIMIT = 20;
  currentPage = 1;
  totalPage: number | null = null;
  isModalOpen = false;
 selectedFile: File | null = null;

  nextPage(): void {
    if (this.currentPage < this.totalPage!) {
      // this.fetchCustomers(this.currentPage + 1);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      // this.fetchCustomers(this.currentPage - 1);
    }
  }


  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedFile = null;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.selectedFile = file;
    }
  }

  submitPdf(): void {
    if (!this.selectedFile) return;

    console.log("Uploaded File:", this.selectedFile);

    // API call here

    this.closeModal();
  }
}
